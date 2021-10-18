export function parseStoragePublicUrl(url: string) {
  const publicUrl = "https://storage.taskyn.ir/public/";
  const domainIndex = url.indexOf(publicUrl);
  if (domainIndex !== 0) {
    return {
      id: "",
      valid: false,
    };
  }
  const id = url.replace(publicUrl, "");
  return {
    id,
    valid: true,
  };
}
