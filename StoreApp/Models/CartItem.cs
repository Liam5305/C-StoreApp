using System.Net.Http.Headers;

namespace StoreApp.Models
{
    public class CartItem
    {
        public int Id { get; set; }
        public string? UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public DateTime DateAdded { get; set; }

        public Item? Items { get; set; }
    }
}
