// 通过 url 下载文件
export function downloadFileByUrl(url, name) {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', name)
  document.body.appendChild(link)
  link.click()
}

export function downloadFile(options) {
  const { data, fileName } = options

  const url = window.URL.createObjectURL(new Blob([data]))

  downloadFileByUrl(url, fileName)
}

// 根据响应数据导出文件
export function downloadFileByRes(res) {
  const { data, headers } = res
  const fileName = decodeURI(headers['content-disposition']?.split('attachment;filename=')[1])
  if (!data || !fileName) return

  downloadFile({ data, fileName })
}
