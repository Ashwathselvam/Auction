﻿namespace Contracts;

public class AuctionFinished
{
    public bool ItemSold { get; set; }

    public string AuctionId { get; set; }

    public string Winner { get; set; }

    public string seller { get; set; }

    public int? Amount { get; set; }
}
