namespace revisao
{
    public struct Aluno
    {
        public string Nome {get; set;}
        public double Nota {get; set;}

        public static ConceitoEnum GetConceitoEnum(double nota)
        {
            if(nota > 8)
                return ConceitoEnum.A;
            else if (nota > 6 && nota <= 8)
                return ConceitoEnum.B;
            else if(nota > 4 && nota <= 6)
                return ConceitoEnum.C;
            else if(nota == 3)
                return ConceitoEnum.D;
            else if(nota == 2)
                return ConceitoEnum.E;
            else
                return ConceitoEnum.F;
        }
    }

    public enum ConceitoEnum
    {
        A,
         B, 
         C ,
          D,
          E, 
          F
    }
}