import { Component } from '@angular/core';
import { Story } from './models/story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  stories: Story[] = [
    new Story('7 Reasons Why White People Should Not Wear Black Hairstyles', './assets/hairstyles.png', ['today', 'month', 'week'], 'https://everydayfeminism.com/2015/07/white-people-black-hairstyles/'),
    new Story('3 Differences Between the Terms ‘Gay’ and ‘Queer’ — and Why It Matters', './assets/gayqueer.jpg', ['today', 'month', 'week'], 'https://everydayfeminism.com/2016/03/difference-between-gay-queer/'),
    new Story('10 Ways to Avoid Everyday Ableism', './assets/abelism.jpg', ['today'], 'https://everydayfeminism.com/2013/10/avoid-everyday-ableism/'),
    new Story('Intent vs. Impact: Why Your Intentions Don’t Really Matter', './assets/intent.jpg', ['today', 'week'], 'https://everydayfeminism.com/2013/07/intentions-dont-really-matter/'),
    new Story('Meet the 5 Black Trans and Gender Variant Artists from the Global South Who are Revolutionizing Fashion, Music, and Visual Art', './assets/transartists.jpg', ['latest'], 'https://everydayfeminism.com/2018/08/black-trans-gender-variant-artists-global-south/'),
    new Story('White People: This Is How To Check Your Privilege When Asking People of Color For Their Labor', './assets/privilege.jpg', ['latest'], 'https://everydayfeminism.com/2018/07/white-people-this-is-how-to-check-your-privilege-when-asking-people-of-color-for-their-labor/'),
    new Story('Here Are 7 Reasons Why Polyamory Is More Difficult When You’re Disabled', './assets/disabledpoly.jpg', ['latest'], 'https://everydayfeminism.com/2018/07/polyamory-difficult-disabled/'),
    new Story('First It Was All About Diversity, Then Inclusion. Here’s Why Neither Of Those Are Enough', './assets/diversity.jpg', ['latest'], 'https://everydayfeminism.com/2018/07/diversity-inclusion-neither-are-enough/'),
    new Story('3 Ways Men Wanting to ‘Focus On Her Pleasure’ During Sex Can Still Be Sexist', './assets/sexist.jpg', ['month'], 'https://everydayfeminism.com/2015/12/focusing-on-her-pleasure/'),
    new Story('5 Things to Do (And Not Do) to Support Someone with Depression', './assets/depression.jpg', ['month'], 'https://everydayfeminism.com/2015/03/supporting-people-with-depression/')
  ]
}
