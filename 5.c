#include<stdio.h>
void garis()
{
printf("====================================================================\n\n");
}
main()
{
garis();
printf("PROGRAM PENJUMLAHAN SECARA DIAGONAL MATRIX ORDO 3 X 3\n\n\n");
garis();
int i,j,sum=0;
int A[3][3]={1,2,3,4,5,6,7,8,9};
for(i=0;i<3;i++)
{ 
printf("\t\t|\t"); 
for(j=0;j<3;j++)
{ 
printf("%d\t\a",A[i][j]); 
} 
printf("|\n\n"); 
} 
{ 
for(i=0;i<3;i++)
{ 
for(j=0;j<3;j++)
{ 
if (i==j) sum+=A[i][j]; 
} 
} 
printf ("\t\tJumlah diagonalnya adalah = %d\n\n",sum); 
printf ("\t\t[1][1] + [2][2] + [3][3] = %d\n\n",sum); 
} 
garis(); 
getch(); 
} 