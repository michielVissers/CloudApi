using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using apiProject.Model;
using Microsoft.EntityFrameworkCore;

namespace apiProject.Controllers
{
    //[Route("api/books")]
    //[ApiController]
    public class SongsController : ControllerBase
    {
        static List<Song> list = new List<Song>();
        static Song[] list2 = new Song[20];

        static SongsController()
        {
            list.Add(new Song()
            {
                Id = 1,
                Title = "The Hobbit",
                Duration = "1234"
            });

            list.Add(new Song()
            {
                Id = 2,
                Title = "The Hobbit 2",
                Duration = "234"
            });
        }

        [HttpGet]
        public List<Song> GetSongs()
        {
            return list;
        }


        [Route("{id}")]
        [HttpGet]
        public ActionResult<Song> GetSong(int id)
        {
            var theSong = list.FirstOrDefault(song => song.Id == id);
            if (theSong == null)
                return NotFound();

            return theSong;
        }



        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteSong(int id)
        {
            var theSong = list.FirstOrDefault(song => song.Id == id);
            if (theSong == null)
                return NotFound();

            list.Remove(theSong);
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Song> AddBook([FromBody]Song song)
        {
            //ken er ID aan toe
            var max = list.Max(b => b.Id);
            song.Id = max + 1;
            list.Add(song);
            //return song met ID
            return Created("", song);
        }

    }
}