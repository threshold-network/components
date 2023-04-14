import { FC, useEffect, useRef, useState } from "react"
import {
  Box,
  BoxProps,
  Button,
  Image,
  useColorModeValue,
  useMultiStyleConfig,
  VStack,
} from "@chakra-ui/react"
import { BodyLg, BodyMd, BodySm, LabelMd } from "../Typography"
import fileUploadLight from "../../static/images/FileUploadLight.png"
import fileUploadDark from "../../static/images/FileUploadDark.png"
import useIsCurrentlyDragging from "./useIsCurrentlyDragging"

interface FileUploaderProps {
  onFileUpload: (file: File | null) => void
  size?: "lg" | "sm"
  headerHelperText?: string
  footerHelperText?: string
  accept?: string
}

export const FileUploader: FC<BoxProps & FileUploaderProps> = (p) => {
  const {
    size = "lg",
    headerHelperText,
    footerHelperText,
    accept,
    onFileUpload,
    ...props
  } = p
  const dragAreaRef = useRef<HTMLDivElement>(null)

  // registers the drag events on the drag area
  const isCurrentlyDragging = useIsCurrentlyDragging({
    dragAreaRef,
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const [isUploaded, setIsUploaded] = useState(false)

  const [file, setFile] = useState<File | null>(null)

  const styles = useMultiStyleConfig("FileUploader", {
    ...p,
    isCurrentlyDragging,
    size,
  })

  const _handleDrop = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    const eventFilesFromDrop = event?.dataTransfer?.files
    const eventFilesFromInput = event.target.files
    const files = eventFilesFromDrop || eventFilesFromInput

    if (files.length > 0) {
      const [file] = files
      if (file) {
        if (onFileUpload) onFileUpload(file)
        setFile(file)
        setIsUploaded(true)
        return true
      }
      return false
    }
  }

  // copies the button click handler over to the hidden input to trigger the file upload modal
  const handleButtonClick = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    if (inputRef && inputRef.current) {
      inputRef.current.click()
    }
  }

  // registers the drop event on the drag area
  useEffect(() => {
    if (dragAreaRef && dragAreaRef.current) {
      const ele = dragAreaRef.current
      ele.addEventListener("drop", _handleDrop)
      return () => {
        ele.removeEventListener("drop", _handleDrop)
      }
    }
  }, [_handleDrop])

  // watches for a dropped file and sets "isUploaded" value when one is detected
  useEffect(() => {
    if (file) {
      setIsUploaded(true)
      setFile(file)
    } else {
      if (inputRef.current) inputRef.current.value = ""
      setIsUploaded(false)
      setFile(null)
    }
  }, [file])

  return (
    <Box __css={styles.container} {...props}>
      <Box display="flex" justifyContent="space-between">
        <BodyMd>Upload File</BodyMd>
        <BodySm>{headerHelperText}</BodySm>
      </Box>
      <Box __css={styles.uploadArea} ref={dragAreaRef}>
        <Image
          maxW="80px"
          mx="auto"
          src={useColorModeValue(fileUploadLight, fileUploadDark)}
        />

        <BodyLg isTruncated mt="4" textAlign="center">
          {isUploaded ? file?.name : "Drag and drop your file here"}
        </BodyLg>
        <VStack spacing="4" mt="4">
          {isUploaded ? (
            <Button
              onClick={() => {
                onFileUpload(null)
                setFile(null)
              }}
              variant="outline"
              isFullWidth={size === "sm"}
            >
              Cancel
            </Button>
          ) : (
            <>
              <LabelMd>OR</LabelMd>
              <Button
                onClick={handleButtonClick}
                variant="outline"
                isFullWidth={size === "sm"}
              >
                Choose File
              </Button>
              <input
                style={{ visibility: "hidden" }}
                onChange={_handleDrop}
                ref={inputRef}
                type="file"
                multiple={false}
                accept={accept}
              />
            </>
          )}
        </VStack>
      </Box>
      <BodySm mt={2}>{footerHelperText}</BodySm>
    </Box>
  )
}
