function fibonacciGenarator(n)
  {
    for(var i=0;i<n;i++)
    {
    if(n==0)
    {
      return 0;
    }
    else if(n==1)
    {
      return 1;
    }
    else
    {
      return fibonacciGenarator(n-1)+fibonacciGenarator(n-2);
    }
      
    }
  }
