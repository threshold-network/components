import { FC, useEffect, useRef, useState } from "react"
import {
  Box,
  BoxProps,
  Button,
  Image,
  useColorModeValue,
  useStyleConfig,
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
}

export const FileUploader: FC<BoxProps & FileUploaderProps> = (p) => {
  const { size = "lg", headerHelperText, ...props } = p
  const dragAreaRef = useRef<HTMLLabelElement>(null)
  // registers the drag events on the drag area
  const isCurrentlyDragging = useIsCurrentlyDragging({
    dragAreaRef,
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const [isUploaded, setIsUploaded] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState(false)
  const styles = useStyleConfig("FileUploader", {
    ...p,
    isCurrentlyDragging,
    size,
  })

  const validateFile = (file: File) => {
    // if (types && !checkType(file, types)) {
    //   // types included and type not in them
    //   setError(true)
    //   if (onTypeError) onTypeError("File type is not supported")
    //   return false
    // }

    return true
  }

  const blockEvent = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const _handleDrop = (event: any) => {
    blockEvent(event)
    const eventFilesFromDrop = event?.dataTransfer?.files
    const eventFilesFromInput = event.target.files
    const files = eventFilesFromDrop || eventFilesFromInput

    if (files.length > 0) {
      const [file] = files
      let isValidationError = false
      if (file) {
        isValidationError = !validateFile(file)
        if (isValidationError) return false
        if (props.onFileUpload) props.onFileUpload(file)
        setFile(file)
        setIsUploaded(true)
        setError(false)
        return true
      }
      return false
    }
  }

  // copies the button click handler over to the hidden input to trigger the file upload modal
  const handleButtonClick = (event: any) => {
    blockEvent(event)
    // eslint-disable-next-line no-param-reassign
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
  }, [_handleDrop, dragAreaRef])

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

  const renderMainContent = () => {
    if (isUploaded) {
      return (
        // @ts-ignore
        <Box __css={styles.uploadArea}>
          <VStack spacing={4}>
            <Image
              maxW="80px"
              src={useColorModeValue(fileUploadLight, fileUploadDark)}
            />
            <BodyLg>{file?.name}</BodyLg>
            <Button
              onClick={() => {
                props.onFileUpload(null)
                setFile(null)
              }}
              variant="outline"
            >
              Cancel
            </Button>
          </VStack>
        </Box>
      )
    }
    return (
      <Box
        // @ts-ignore
        ref={dragAreaRef}
        // @ts-ignore
        __css={styles.uploadArea}
      >
        <VStack spacing={4}>
          <Image
            maxW="80px"
            src={useColorModeValue(fileUploadLight, fileUploadDark)}
          />
          <BodyLg>Drag and drop your file here</BodyLg>
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
          />
        </VStack>
      </Box>
    )
  }

  return (
    // @ts-ignore
    <Box __css={styles.container}>
      <Box display="flex" justifyContent="space-between">
        <BodyMd>Upload File</BodyMd>
        <BodySm>{headerHelperText}</BodySm>
      </Box>
      {renderMainContent()}
    </Box>
  )
}
