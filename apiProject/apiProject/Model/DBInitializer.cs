using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiProject.Model
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            //Are there already songs present ?
            if (!context.Songs.Any())
            {
                var artist = new Artist()
                {
                    Name = "Robert Nesta Marley",
                    Alias = "Bob Marley",
                    Born = "6 februari 1945"
                };

                var song = new Song()
                {
                    Title = "Don't worry be Happy",
                    Duration = "4:49",
                    Artist = artist
                };

                var song2 = new Song()
                {
                    Title = "Is This Love",
                    Duration = "3:56",
                    Artist = artist
                };

                context.Songs.Add(song);
                context.Songs.Add(song2);
                context.SaveChanges();
            }
        }
    }
}
