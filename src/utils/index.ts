//把驼峰转换成横杆连接
export function camelize(str: string): string {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase()
}
