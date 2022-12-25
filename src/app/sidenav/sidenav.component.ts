import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';


import { selectAllStories, selectSideNavStatus, mainActions, selectSelectedStory } from '../ngrx/main.reducer';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  allStories = null;
  filteredStories = null;
  
  selectedStory = null
  selectedStoryIndex = -1

  sidenavVisible = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.select(selectAllStories).subscribe(v => {
      this.allStories = v
      this.filteredStories = v
    })

    this.store.select(selectSideNavStatus).subscribe(status => {
      this.sidenavVisible = status
      this.cdr.detectChanges()
    })

    this.store.select(selectSelectedStory).subscribe(v => {
      this.selectedStory = v
      if (!this.allStories) return
      this.selectedStoryIndex = this.allStories.findIndex(v2 => v?.key == v2.key)
    })
  }


  onFocusKeyboardElement(event?) {
    this.store.dispatch(mainActions.setKeyboardFocudEle({ payload: event }))
  }

  sidebarClickStory(story) {
    this.store.dispatch(mainActions.setSelectedStory({ selectedStory: story }))
  }


  sidenavSearchInput(searchText: string, enterKey: boolean) {
    if (searchText.length == 0) {
      this.filteredStories = this.allStories
    } else if (enterKey) {
      searchText = searchText.toLowerCase()
      this.filteredStories = this.allStories.filter((story) => {
        return story.text.toLowerCase().indexOf(searchText) > -1
      })
    }
  }

  paginate(event) {
    console.log(event);
    
  }

}
