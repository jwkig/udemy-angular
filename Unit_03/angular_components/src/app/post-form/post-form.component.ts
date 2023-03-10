import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit{

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef = {} as ElementRef;

  title = '';
  text = '';

  constructor() {
  }

  ngOnInit() {
  }

  addPost():void {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post);
      console.log('New post: ', post);
      this.title = this.text = '';
    }
  }

  focusTitle(): void {
    this.inputRef.nativeElement.focus();
    console.log(this.inputRef);
  }
}
