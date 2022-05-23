namespace AbstraindoUmJogoRPGUsandoOO.src.Entities.Itens
{
    public class Trap : Weapon
    {
        public bool Armed {get; set;} = false;
        
        public Trap(int Level) : base(Level){}

    }
}