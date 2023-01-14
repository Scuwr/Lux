import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, takeUntil } from 'rxjs/operators';

import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements AfterViewInit {

  username = null;

  dialogues = {
    username: {
      display: true,
      input: null
    },
    help: {
      display: false,
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,

    private messageService: MessageService,
  ) { }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.check_params_username()
    }, 0);
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

  get_user_data(){

  }

  get_story_data(){

  }

  check_params_username() {
    this.route.queryParams.pipe(
      first()
    ).subscribe((params) => {
      if (!!params.username) { // username found in url parameters, login
        this.dialogues.username.input = params.username
        this.username_confirm()
      }
    })
  }

  async username_confirm() {
    this.dialogues.username.input = this.dialogues.username.input.toLowerCase();
    this.dialogues.username.input = this.dialogues.username.input.replaceAll(/[^a-z0-9]*/g, '')
    if (this.dialogues.username.input.length == 0) {
      this.messageService.add({severity:'error', summary:'Error', detail:'Username invalid.'})
      return
    }
    this.username = this.dialogues.username.input
    this.dialogues.username.display = false;

    // set username in url
    setTimeout(() => {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {username: this.username}, 
        queryParamsHandling: 'merge'
      })
    }, 0);
  }

}
