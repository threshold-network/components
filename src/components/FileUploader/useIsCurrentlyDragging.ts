import { useCallback, useEffect, useState } from "react"

let draggingCount = 0
type Params = {
  dragAreaRef: any
}

export default function useIsCurrentlyDragging({
  dragAreaRef,
}: Params): boolean {
  const [isCurrentlyDragging, setIsCurrentlyDragging] = useState(false)

  const handleDragIn = useCallback((ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    draggingCount++
    setIsCurrentlyDragging(true)
  }, [])

  const handleDragOut = useCallback((ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    draggingCount--
    if (draggingCount > 0) return
    setIsCurrentlyDragging(false)
  }, [])

  const handleDrag = useCallback((ev) => {
    ev.preventDefault()
    ev.stopPropagation()
  }, [])

  useEffect(() => {
    if (dragAreaRef && dragAreaRef.current) {
      const ele = dragAreaRef.current
      ele.addEventListener("dragenter", handleDragIn)
      ele.addEventListener("dragleave", handleDragOut)
      ele.addEventListener("dragover", handleDrag)

      return () => {
        ele.removeEventListener("dragenter", handleDragIn)
        ele.removeEventListener("dragleave", handleDragOut)
        ele.removeEventListener("dragover", handleDrag)
      }
    }
  }, [handleDragIn, handleDragOut, handleDrag, dragAreaRef])

  return isCurrentlyDragging
}
