namespace AbstraindoUmJogoRPGUsandoOO.src.Entities.Itens
{
    public class Weapon : Item
    {
        public int Range {get; set;} = 1;
        public int Level {get; private set;} = 1;

        public Weapon (int LevelRarity)
        {
            this.Level = LevelRarity;
            RandomWaeapon();

            int randomDamage = new Random().Next(1,LevelRarity * 2);
            randomDamage++;
            this.Coust = new Random().Next(LevelRarity, randomDamage * 2);

            switch(LevelRarity)
            {
                case 1:
                    this.Damage = randomDamage + new Random().Next(randomDamage);
                break;
                case 2:
                    this.Damage = randomDamage + new Random().Next(randomDamage+2);
                break;
                case 3:
                    this.Damage = (randomDamage*2) + new Random().Next(randomDamage);
                break;
                case 4:
                    this.Damage = (randomDamage*2) + new Random().Next(randomDamage,randomDamage*2);
                break;
            }
        }

        private void RandomWaeapon()
        {
            int random = new Random().Next(1,5);

            switch(random)
            {
                case 1:
                    this.Name = "Axe";
                    this.Range = 1;  
                    this.Area = 2;
                break;
                case 2:
                    this.Name = "Whip";
                    this.Range = 2;  
                    this.Area = 1;
                break;
                case 3:
                    this.Name = "Bow";
                    this.Range = 3;  
                    this.Area = 1;
                break;
                case 4:
                    this.Name = "Sword";
                    this.Range = 1;  
                    this.Area = 1;
                break;
                case 5:
                    this.Name = "Bomb";
                    this.Range = 2;  
                    this.Area = 3;
                break;
            }
        }

        public override string ToString()
        {
            return $"{this.Name}:{this.Level} - Range:{this.Range} - Area:{this.Area} - Damage:{this.Damage} - Coust:{this.Coust}";
        }
    }
}