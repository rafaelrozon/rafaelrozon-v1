using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(rafaelrozon.Startup))]
namespace rafaelrozon
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
