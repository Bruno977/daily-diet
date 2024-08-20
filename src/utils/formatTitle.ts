function formatTitle(title: string) {
  if (title.trim().length > 24) {
    return title.trim().substring(0, 24) + "...";
  }
  return title;
}

export { formatTitle };
