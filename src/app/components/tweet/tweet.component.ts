import { Component, Input, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TweetComponent implements OnInit {
  @Input() tweet: any;

  constructor() { }

  ngOnInit() {
    console.log(this.tweet);
    this.parseTweet();
  }

  parseTweet() {
    this.tweet.text = this.tweet.text.replace(/\#[a-zA-Z]+/g, '\<span class\="highlight"\>$&\<\/span\>');
    this.tweet.text = this.tweet.text.replace(/\@[a-zA-Z]+/g, '\<span class\="highlight"\>$&\<\/span\>');
  }
}
