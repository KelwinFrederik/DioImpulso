namespace AbstraindoUmJogoRPGUsandoOO.src.Entities.Personagens
{
    public class Personagem
    {
        public string NickName {get; set;} = string.Empty;
        public int HPMax {get; set;} = 20;
        public int HPCurrent {get; set;} = 20;
        public int MPMax {get; set;} = 10;
        public int MPCurrent {get; set;} = 10;


        public Personagem(string Name){
            this.NickName = Name;
        }
    }
}