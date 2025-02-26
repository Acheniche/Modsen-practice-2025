export const setDragData = (
  event: React.DragEvent<HTMLDivElement>,
  data: Record<string, string>,
) => {
  Object.entries(data).forEach(([key, value]) => {
    event.dataTransfer.setData(key, value);
  });
};
