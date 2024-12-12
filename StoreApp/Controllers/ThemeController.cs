using Microsoft.AspNetCore.Mvc;

namespace StoreApp.Controllers
{
    public class ThemeController : Controller
    {
        // AI Generated
        public IActionResult ToggleTheme(string returnUrl)
        {
            string currentTheme = Request.Cookies["theme"] ?? "light";
            string newTheme = currentTheme == "light" ? "dark" : "light";

            Response.Cookies.Append("theme", newTheme, new CookieOptions
            {
                Expires = DateTimeOffset.Now.AddDays(30),
                HttpOnly = false
            });

            return Redirect(returnUrl ?? "~/"); 
        }
    }
}
