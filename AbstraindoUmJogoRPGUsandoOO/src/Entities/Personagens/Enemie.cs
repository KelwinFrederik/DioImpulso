namespace AbstraindoUmJogoRPGUsandoOO.src.Entities.Personagens
{
    public class Enemie : Personagem
    {
        public int Dificult {get; set;} = 1;
        
        public Enemie() : base(string.Empty){}
        protected Enemie(string NickName, int Dificult) : base(NickName)
        {
            this.Dificult = Dificult;

            SetHP();
            SetMP();
        }

        private void SetHP()
        {
            this.HPMax = this.HPCurrent = this.Dificult * 5;
        }
        private void SetMP()
        {
            this.MPMax = this.MPCurrent = this.Dificult * 6;
        }

        public Enemie GetRandomEnemie()
        {
            int randomNumber = new Random().Next(1,7);
            Enemie enemie;

            switch(randomNumber)
            {
                case 1:
                    enemie = new Enemie(
                        "Eskeleton",
                        new Random().Next(2,5)
                    );
                break;
                case 2:
                    enemie = new Enemie(
                        "Goop",
                        new Random().Next(3,6)
                    );
                break;
                case 3:
                    enemie = new Enemie(
                        "Beast",
                        new Random().Next(4,7)
                    );
                break;
                case 4:
                    enemie = new Enemie(
                        "Darkness",
                        new Random().Next(5,8)
                    );
                break;
                case 5:
                    enemie = new Enemie(
                        "Dev. FullStack",
                        new Random().Next(7,11)
                    );
                break;
                default:
                    enemie = new Enemie(
                        "?",
                        new Random().Next(11,150)
                    );
                break;
            }

            return enemie;
        }
        public void WasAttacked(int Damage, int action)
        {
            switch(action)
            {
                case 1: //Attack
                    this.HPCurrent -= Damage;
                break;
                case 2: //Defence
                    this.HPCurrent -= (Damage / 2);
                break;
            }

            if(this.HPCurrent <= 0)
            {
                // Proximo Inimigo
            }
        }
        public int Attack()
        {
            return new Random().Next(Dificult*2);
        }

        public override string ToString()
        {
            return $"{this.NickName} HP: {this.HPCurrent}/{this.HPMax} MP {this.MPCurrent}/{this.MPMax} = Dificult {this.Dificult}";
        }
    }
}