namespace backend.Models
{
    public class Document
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        // Du kan lägga till fler egenskaper här, t.ex. datum, författare, etc.
    }
}
