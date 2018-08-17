import { Component } from '@angular/core';
import { Story } from './models/story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  stories: Story[] = [
    new Story('7 Reasons Why White People Should Not Wear Black Hairstyles', './assets/hairstyles.png'),
    new Story('3 Differences Between the Terms ‘Gay’ and ‘Queer’ — and Why It Matters', './assets/gayqueer.jpg'),
    new Story('10 Ways to Avoid Everyday Ableism', './assets/abelism.jpg'),
    new Story('Intent vs. Impact: Why Your Intentions Don’t Really Matter', './assets/intent.jpg'),
    new Story('Meet the 5 Black Trans and Gender Variant Artists from the Global South Who are Revolutionizing Fashion, Music, and Visual Art', './assets/transartists.jpg'),
    new Story('White People: This Is How To Check Your Privilege When Asking People of Color For Their Labor', './assets/privilege.jpg'),
    new Story('Here Are 7 Reasons Why Polyamory Is More Difficult When You’re Disabled', './assets/disabledpoly.jpg'),
    new Story('First It Was All About Diversity, Then Inclusion. Here’s Why Neither Of Those Are Enough', './assets/diversity.jpg'),
    new Story('3 Ways Men Wanting to ‘Focus On Her Pleasure’ During Sex Can Still Be Sexist', './assets/sexist.jpg'),
    new Story('5 Things to Do (And Not Do) to Support Someone with Depression', './assets/depression.jpg')
  ]
}
