using System;
using System.Collections.Generic;

namespace Domain
{
    public class ForumPost
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public AppUser Author {get; set;}
        // public int ReplyId { get; set; }
        // public ICollection<Comment> Comments { get; set; }
        public Guid UserId { get; set; }
    }
}