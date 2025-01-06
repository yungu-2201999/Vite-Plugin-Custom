export default function myPlugin() {
  const virtualModuleId = 'virtual:my-module'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'custom-plugin', // 必须的，将会在 warning 和 error 中显示
    resolveId(id) {
      console.log(`resolveId ${id}`)
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(...rest) {
      console.log('load',rest)
      if (rest[0] === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`
      }
    },
    transform(code, id) {
      console.log(`========================${id}===============================`)
      console.log(code)
      console.log("============================================================")
    }
  }
}