//What are deferrable views
//app.component.ts
import {Component} from '@angular/core';
import {ArticleCommentsComponent} from './article-comments.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and
          this is why. Angular has the coolest
          deferrable view feature that makes defer
          loading content the easiest and most
          ergonomic it could possibly be.
        </p>
      </article>

      @defer {
        <article-comments />
      }

    </div>
  `,
  imports: [ArticleCommentsComponent],
})
export class AppComponent {}
//article-comments.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'article-comments',
  template: `
    <h2>Comments</h2>
    <p class="comment">
      Building for the web is fantastic!
    </p>
    <p class="comment">
      The new template syntax is great
    </p>
    <p class="comment">
      I agree with the other comments!
    </p>
  `,
  styles: [
    `
    .comment {
      padding: 15px;
      margin-left: 30px;
      background-color: paleturquoise;
      border-radius: 20px;
    }
  `,
  ],
})
export class ArticleCommentsComponent {}


//@loading, @error and @placeholder blocks
//app.component.ts
import {Component} from '@angular/core';
import {ArticleCommentsComponent} from './article-comments.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and
          this is why. Angular has the coolest
          deferrable view feature that makes defer
          loading content the easiest and most
          ergonomic it could possibly be.
        </p>
      </article>

      @defer {
        <article-comments />
      } @placeholder (minimum 1s) {
        <p>Placeholder for comments</p>
      } @loading (minimum 1s; after 500ms) {
        <p>Loading comments...</p>
      } @error {
        <p>Failed to load comments</p>
      }

    </div>
  `,
  imports: [ArticleCommentsComponent],
})
export class AppComponent {}
//article-comments.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'article-comments',
  template: `
    <h2>Comments</h2>
    <p class="comment">
      Building for the web is fantastic!
    </p>
    <p class="comment">
      The new template syntax is great
    </p>
    <p class="comment">
      I agree with the other comments!
    </p>
  `,
  styles: [
    `
    .comment {
      padding: 15px;
      margin-left: 30px;
      background-color: paleturquoise;
      border-radius: 20px;
    }
  `,
  ],
})
export class ArticleCommentsComponent {}


//Defer triggers
//app.component.ts
import {Component} from '@angular/core';
import {ArticleCommentsComponent} from './article-comments.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and
          this is why. Angular has the coolest
          deferrable view feature that makes defer
          loading content the easiest and most
          ergonomic it could possibly be.
        </p>
      </article>

      <button type="button" #showComments>Show all comments</button>

      @defer (on hover; on interaction(showComments)) {
        <article-comments />
      } @placeholder (minimum 1s) {
        <p>Placeholder for comments</p>
      } @loading (minimum 1s; after 500ms) {
        <p>Loading comments...</p>
      } @error {
        <p>Failed to load comments</p>
      }

    </div>
  `,
  imports: [ArticleCommentsComponent],
})
export class AppComponent {}
//article-comments.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'article-comments',
  template: `
    <h2>Comments</h2>
    <p class="comment">
      Building for the web is fantastic!
    </p>
    <p class="comment">
      The new template syntax is great
    </p>
    <p class="comment">
      I agree with the other comments!
    </p>
  `,
  styles: [
    `
    .comment {
      padding: 15px;
      margin-left: 30px;
      background-color: paleturquoise;
      border-radius: 20px;
    }
  `,
  ],
})
export class ArticleCommentsComponent {}