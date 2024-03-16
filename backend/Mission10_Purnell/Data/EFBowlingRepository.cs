namespace Mission10_Purnell.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext _bowlingContext;
        public EFBowlingRepository(BowlingLeagueContext temp) {
            _bowlingContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlingContext.Bowlers;
        public IEnumerable<Team> Teams => _bowlingContext.Teams;

    }
}
