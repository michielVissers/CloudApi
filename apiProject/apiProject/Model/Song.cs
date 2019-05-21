using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiProject.Model
{
    public class Song
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Duration { get; set; }

        public int ArtistId { get; set; }

        public Artist Artist { get; set; }
    }
}
