import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  post: string
  href: string

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const articleName = this.route.snapshot.paramMap.get('article')
    this.href = window.location.href
    this.post = './assets/docs/' + articleName + '.md'
  }

}
