using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace apiProject.Model
{
    public class Artist
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Alias { get; set; }

        public string Born { get; set; }

        [JsonIgnore]
        public ICollection<Song> Songs { get; set; }
    }
}
