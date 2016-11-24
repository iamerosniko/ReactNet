using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactNet.Startup))]
namespace ReactNet
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
