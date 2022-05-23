using AbstraindoUmJogoRPGUsandoOO.src.Entities.Itens;

namespace AbstraindoUmJogoRPGUsandoOO.src.Entities.Personagens
{
    public class Hero : Personagens.Personagem
    {
        public int BaseDamage { get; private set; } = 1;
        public int Level {get; private set;} = 1;
        public int Experience {get; private set;} = 0;
        public Classes Class {get; private set;} = Classes.Undefined;
        public List<Itens.Item> Items { get; private set; }

        public Hero(string NickName, Classes Class) : base(NickName)
        {
            this.Class = Class;

            SetHP();
            SetMP();
            SetItens();
            SetBaseDamage();
        }

        private void SetBaseDamage()
        {
            this.BaseDamage = this.Level * 2;
        }
        private void SetHP()
        {
            switch(this.Class)
            {
                case Classes.Knight:
                    this.HPMax = this.HPCurrent = (this.Level * 7) + new Random().Next(2,5);
                break;
                case Classes.Archer:
                    this.HPMax = this.HPCurrent = (this.Level * 6) + new Random().Next(2,5);
                break;
                case Classes.Wizard:
                    this.HPMax = this.HPCurrent = (this.Level * 5) + new Random().Next(2,5);
                break;
            }
        }
        private void SetMP()
        {
             switch(this.Class)
            {
                case Classes.Knight:
                    this.MPMax = this.MPCurrent = (this.Level * 4) + new Random().Next(2,5);
                break;
                case Classes.Archer:
                    this.MPMax = this.MPCurrent = (this.Level * 5) + new Random().Next(2,5);
                break;
                case Classes.Wizard:
                    this.MPMax = this.MPCurrent = (this.Level * 6) + new Random().Next(2,5);
                break;
            }
        }
        private void SetItens()
        {
            if(this.Items == null || this.Items.Count <= 0)
                this.Items = new List<Itens.Item>();

            this.Items.Add(new Weapon(this.Level));
            this.Items.Add(new Trap(this.Level));
        }
        public void Improve(int Experience)
        {
            this.Experience += Experience;
            int Levelxperience = this.Level * 100;
            
            if(this.Level < 4 && this.Experience >= Levelxperience)
            {
                this.Experience -=  Levelxperience;
                Level ++;

                SetHP();
                SetMP();
                SetItens();
                SetBaseDamage();
            }
        }
        public int Attack(int ItemIndex)
        {
            int Damage = 0;
            
            if(this.Items == null)
                return -1;
            var ItemChosed = Items[ItemIndex];
            
            if(this.MPCurrent < ItemChosed.Coust)
                return -1;

            this.MPCurrent -= ItemChosed.Coust;
            Damage = new Random().Next(1, ItemChosed.Damage) + this.BaseDamage;

            return Damage;
        }
        public void WasAttacked(int Damage, int action)
        {
            switch(action)
            {
                case 1: //Attack
                    this.HPCurrent -= Damage;
                break;
                case 2://Defence
                    Defence(Damage);
                break;
                case 3://Dodge
                    Dodge(Damage);
                break;// Run
                case 4:
                    Run(Damage);
                break;
            }

            if(this.HPCurrent <= 0)
            {
                // Fim de Jogo
            }
        }
        private void Run(int Damage)
        {
            this.HPCurrent -= (Damage / 2);
            this.MPCurrent += Damage;
        }
        private void Defence(int Damage)
        {
            Damage -= Level;
            if(Damage <= 0){
                this.HPCurrent--;
                return;
            }

            switch(this.Class)
            {
                case Classes.Knight:
                    this.HPCurrent -= (int)(Damage * 0.25);
                break;
                case Classes.Archer:
                    this.HPCurrent -= (int)(Damage * 0.40);
                break;
                default:
                    this.HPCurrent -= (int)(Damage * 0.55);
                break;
            }
        }    
        private void Dodge(int Damage)
        {
            Damage -= Level;
            if(Damage <= 0){
                this.HPCurrent--;
                return;
            }

            switch(this.Class)
            {
                case Classes.Knight:
                    this.HPCurrent -= (int)(Damage * 0.55);
                break;
                case Classes.Archer:
                    this.HPCurrent -= (int)(Damage * 0.25);
                break;
                default:
                    this.HPCurrent -= (int)(Damage * 0.30);
                break;
            }
        }
    }
    public enum Classes { Undefined, Knight, Wizard, Archer }
}