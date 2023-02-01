import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  post: string
  href: string

  docs: MenuItem[];
  activeDoc: MenuItem;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const articleName = this.activatedRoute.snapshot.paramMap.get('article')
    this.href = window.location.href
    this.post = './assets/docs/' + articleName + '.md'

    this.docs = [
      {label: 'Welcome', id: 'Welcome'},
      {label: 'Getting Started', id: 'GettingStarted'},
      {label: 'Making Good Annotations', id: 'MakingGoodAnnotations'},
    ]

    for (const [i, doc] of this.docs.entries()){
      if (doc.id == articleName){
        this.activeDoc = this.docs[i]
        break
      }
    }
    if (this.activeDoc == null){
      this.activeDoc = this.docs[0]
    }
  }

  onViewModeButton() {
    this.router.navigate(['/view'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  onHomeModeButton() {
    this.router.navigate(['/home'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  onSettingsModeButton(){
    this.router.navigate(['/settings'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  updateDoc(doc){
    this.post = './assets/docs/' + doc.activeItem.id + '.md'
  }

}
