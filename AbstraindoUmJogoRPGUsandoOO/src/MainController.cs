using AbstraindoUmJogoRPGUsandoOO.src.Entities.Itens;
using AbstraindoUmJogoRPGUsandoOO.src.Entities.Personagens;
using static System.Console;

namespace AbstraindoUmJogoRPGUsandoOO.src
{
    public class MainController
    {
        private static bool IsGameRun = false;
        public string Menu()
        {
            return @"
            -=- Start Menu -=-
            Select one option:
            0 - Exit
            1 - Start
            2 - Tutorial
            ";
        }

        internal void StartGame()
        {
            IsGameRun = true;
            
            do{
                WriteLine("Weapon > " + new Weapon(new Random().Next(1,5)));
                WriteLine("Enemie > " + new Enemie().GetRandomEnemie());
                WriteLine("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
                

                var key = ReadKey();
                if(key.KeyChar.Equals('0'))
                    IsGameRun = false;
            }while(IsGameRun);
        }

        internal void TutorialGame()
        {
            throw new NotImplementedException();
        }
    }
}