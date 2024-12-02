namespace StoreApp.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }

        public bool AdminAccess { get; set; }

        public Users()
        {

        }
    }
}
