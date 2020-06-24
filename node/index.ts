import { Service, ServiceContext } from '@vtex/api'

export default new Service({
  routes: {
    ads: async (ctx: ServiceContext) => {
      try {
        const appSettings = await ctx.clients.apps.getAppSettings(
          '' + process.env.VTEX_APP_ID
        )
        ctx.response.body = appSettings.textContent
      } catch (e) {
        ctx.status = 404
      }
    },
  },
})
