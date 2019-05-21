using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using apiProject.Model;

namespace apiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        public LibraryContext _context { get; set; }
        public ArtistsController(LibraryContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Artist> GetArtists()
        {
            return _context.Artists.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Artist> GetArtist(int id)
        {
            var theArtist = _context.Artists.Find(id);
            if (theArtist == null)
                return NotFound();

            return theArtist;
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteArtist(int id)
        {
            var theArtist = _context.Artists.Find(id);
            if (theArtist == null)
                return NotFound();

            _context.Artists.Remove(theArtist);
            _context.SaveChanges();             // DO NOT FORGET !!!
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Artist> AddArtist([FromBody]Artist Artist)
        {
            _context.Artists.Add(Artist);
            _context.SaveChanges();
            //return boek met ID
            return Created("", Artist);
        }

        [HttpPut]
        public ActionResult<Artist> UpdateAuthor([FromBody]Artist Artist)
        {
            //Boek updaten
            _context.Artists.Update(Artist);
            _context.SaveChanges();
            //return boek met ID
            return Created("", Artist);
        }
    }
}