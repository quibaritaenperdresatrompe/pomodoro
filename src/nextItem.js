export default function nextItem(item, items = []) {
  if (items.length === 0) return null;
  if (item == null) {
    return items[0];
  }
  const currentIndex = items.indexOf(item);
  const nextIndex = (currentIndex + 1) % items.length;
  return items[nextIndex];
}
