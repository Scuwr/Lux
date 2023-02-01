import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, takeUntil } from 'rxjs/operators';

import { ConfirmationService, MessageService, SelectItem, FilterService, FilterMatchMode } from 'primeng/api';
import { mainActions } from '../ngrx/main.reducer';
import { MainService } from '../main-component/main.services';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements AfterViewInit {

  matchModeOptions: SelectItem[];
  cols: any[];
  users = [];

  user = {
    key: null,
    id: null,
    name: null
  }

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
    private filterService: FilterService,

    private store: Store,
    private mainService: MainService
  ) { }

  ngAfterViewInit(): void {
    const customFilterName = 'custom-equals';

        this.filterService.register(customFilterName, (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString() === filter.toString();
        });


    this.cols = [
      { field: 'username', header: 'Username' },
      { field: 'privileges', header: 'Privileges' },
    ];      

    this.matchModeOptions = [
      { label: 'Custom Equals', value: customFilterName },
      { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contains', value: FilterMatchMode.CONTAINS },
    ];

    setTimeout(() => {
      this.check_params_username()
    }, 0);
  }

  onDocsModeButton() {
    this.router.navigate(['/docs/GettingStarted'], {
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

  onViewModeButton() {
    this.router.navigate(['/view'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  get_user_data(){
    //this.getUsers();
  }

  async getUsers(){
    if (!!this.users && this.getUsers.length > 0){
      return
    }
    this.store.dispatch(mainActions.PushLoader())
    let res = await this.mainService.usersGet('username').toPromise();
    let arr = res['resp'];

    console.log(arr);

    this.store.dispatch(mainActions.PopLoader())
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
    let res = await this.mainService.usersLogin(this.dialogues.username.input, 'asrs').toPromise()
    let userkey = res['resp']
    if (!userkey){
      this.messageService.add({severity:'error', summary:'Error', detail:'Username invalid.'})
      return
    }

    this.user.key = userkey
    this.user.id = userkey.split(':')[2]
    this.user.name = this.dialogues.username.input
    this.dialogues.username.display = false;

    // set username in url
    setTimeout(() => {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {username: this.user.name}, 
        queryParamsHandling: 'merge'
      })
    }, 0);
  }

}
