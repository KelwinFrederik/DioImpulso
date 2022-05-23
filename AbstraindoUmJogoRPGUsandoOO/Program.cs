using static System.Console;
using AbstraindoUmJogoRPGUsandoOO.src;

namespace AbstraindoUmJogoRPGUsandoOO
{
    class Program
    {
        private static MainController _controller = new MainController();

        static void Main(string[] args)
        {
            bool exit = false;
            do{
                string choice = string.Empty;
                Clear();
                WriteLine(_controller.Menu());
                choice = ReadLine().Trim();

                if(string.IsNullOrEmpty(choice))
                {
                    WriteLine("I need you choice, one option!");
                    ReadKey();
                    continue;
                }
                if(!int.TryParse(choice,out int numeberchoice))
                {
                    WriteLine("I need you choice, one N - U - M - B - E - R!");
                    ReadKey();
                    continue;
                }

                switch(numeberchoice){
                    case 0:
                        exit = true;
                    break;
                    case 1:
                        _controller.StartGame();
                        return;
                    case 2: 
                        _controller.TutorialGame();
                        return;
                    default:
                        WriteLine("Select one number between 0 (zero) and 2 (two)");
                        ReadKey();
                    break;
                }
            }while(!exit);
        }
    }
}