import SparkMD5 from 'spark-md5'

// 加密手机号中间4位
export function encryptPhone(phone) {
  try {
    return phone.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  } catch (error) {
    return phone
  }
}

// 获取文件的 md5 值
export function getFileMD5(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsBinaryString(file)
    fileReader.onload = async (e) => {
      resolve(SparkMD5.hashBinary(e?.target?.result))
    }
    fileReader.onerror = (err) => {
      reject(err)
    }
  })
}
