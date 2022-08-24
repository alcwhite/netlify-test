exports.secure = (data) => {
  if (data.layout) {
    return data.page.filePathStem.replace("/index", "") || "/"
  }
}
