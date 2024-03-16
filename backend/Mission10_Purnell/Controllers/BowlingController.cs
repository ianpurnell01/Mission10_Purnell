using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_Purnell.Data;
using System.Reflection.Metadata.Ecma335;
using System.Linq;

namespace Mission10_Purnell.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository {  get; set; }
        public BowlingController(IBowlingRepository temp) {
            _bowlingRepository = temp;
        }

        [HttpGet]
        public IEnumerable<object> Get()
        {
            var joinData = from Bowler in _bowlingRepository.Bowlers
                           join Team in _bowlingRepository.Teams
                           on Bowler.TeamId equals Team.TeamId
                           where Team.TeamName == "Marlins" || Team.TeamName == "Sharks"
                           select new
                           {
                               BowlerId = Bowler.BowlerId,
                               BowlerLastName = Bowler.BowlerLastName,
                               BowlerFirstName = Bowler.BowlerFirstName,
                               BowlerMiddleInit = Bowler.BowlerMiddleInit,
                               BowlerAddress = Bowler.BowlerAddress,
                               BowlerCity = Bowler.BowlerCity,
                               BowlerState = Bowler.BowlerState,
                               BowlerZip = Bowler.BowlerZip,
                               BowlerPhoneNumber = Bowler.BowlerPhoneNumber,
                               TeamName = Team.TeamName
                           };

            return joinData.ToList();
        }
    }
}
