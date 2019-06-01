using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using apiProject.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace apiProject.Controllers
{
    [Route("api/songs")]
    [ApiController]
    public class Songs2Controller : ControllerBase
    {
        public LibraryContext _context { get; set; }
        public Songs2Controller(LibraryContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Song> GetSongs()
        {
            var songsList = _context.Songs.ToList();
            for (int i = 0; i < songsList.Count(); i++)
            {
                songsList[i] = _context.Songs.Include(s => s.Artist).SingleOrDefault(song => song.Id == songsList[i].Id);
            }
            return songsList;
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Song> GetSong(int id)
        {
            var theSong = _context.Songs.Include(b => b.Artist)
                                        .SingleOrDefault(b => b.Id == id);
            if (theSong == null)
                return NotFound();

            return theSong;
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteSong(int id)
        {
            var theSong = _context.Songs.Find(id);
            if (theSong == null)
                return NotFound();

            _context.Songs.Remove(theSong);
            _context.SaveChanges();             // DO NOT FORGET !!!
            return NoContent();
        }

        /*[HttpPost]
        public ActionResult<Song> AddSong([FromBody]Song song)
        {
            _context.Songs.Add(song);
            _context.SaveChanges();
            //return song met ID
            return Created("", song);
        }*/

        [HttpPost]
        public ActionResult<Song> AddSong([FromBody]Song song)
        {
            int id = song.Artist.Id;
            song.Artist = _context.Artists.SingleOrDefault(artist => artist.Id == id);
            _context.Songs.Add(song);
            _context.SaveChanges();
            //return song met ID
            return Created("", song);
        }

        [HttpPut]
        public ActionResult<Song> UpdateSong([FromBody]Song song)
        {
            //song updaten
            _context.Songs.Update(song);
            _context.SaveChanges();
            //return song met ID
            return Created("", song);
        }

        [Route("abc")]
        [HttpGet]
        public List<Song> GetAbc()
        {
            var songsList = _context.Songs.ToList();
            for (int i = 0; i < songsList.Count(); i++)
            {
                songsList[i] = _context.Songs.Include(s => s.Artist).SingleOrDefault(song => song.Id == songsList[i].Id);
            }
            return songsList.OrderBy(song => song.Artist.Alias).ToList();
        }

        [Route("filter/{alias}")]
        [Authorize("userScope")]
        [HttpGet]
        public List<Song> GetArtistSongs(string alias)
        {
            var songsList = _context.Songs.ToList();
            for (int i = 0; i < songsList.Count(); i++)
            {
                songsList[i] = _context.Songs.Include(s => s.Artist).SingleOrDefault(song => song.Id == songsList[i].Id);
            }
            return songsList.Where(song => song.Artist.Alias.Equals(alias)).ToList();
        }
    }
}