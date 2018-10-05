import { Component, OnInit } from '@angular/core';
// import { PollyService } from '../polly.service';

export interface Voice {
  voicekey: string;
  voice: string;
}
@Component({
  selector: 'app-polly-demo',
  templateUrl: './polly-demo.component.html',
  styleUrls: ['./polly-demo.component.css']
})
export class PollyDemoComponent implements OnInit {
  public voices: Voice[];
  private inputdata: any;
  constructor() { }

  ngOnInit() {
    this.voices = [
      {voicekey: 'Ivy', voice: 'Ivy [English - American]'},
      {voicekey: 'Joanna', voice: 'Joanna [English - American]'},
      {voicekey: 'Joiey', voice: 'Joey [English - American]'},
      {voicekey: 'Justin', voice: 'Justin [English - American]'},
      {voicekey: 'Kendra', voice: 'Kendra [English - American]'},
      {voicekey: 'Kimberly', voice: 'Kimberly [English - American]'},
      {voicekey: 'Salli [English - American]', voice: 'Nicole [English - Australian]'},
      {voicekey: 'Russell', voice: 'Russell [English - Australian]'}
      //  'Emma [English - British]', 'Brian [English - British]',
      // 'Amy [English - British]', 'Raveena [English - Indian]', 'Geraint [English - Welsh]',
      // 'Ricardo [Brazilian Portuguese]', 'Vitoria [Brazilian Portuguese]', 'Lotte [Dutch]',
      // 'Ruben [Dutch]', 'Mathieu [French]', 'Celine [French]', 'Chantal [Canadian French]', 'Marlene [German]',
      // 'Dora [Icelandic]', 'Karl [Icelandic]', 'Carla [Italian]', 'Giorgio [Italian]', 'Mizuki [Japanese]',
      // 'Liv [Norwegian]', 'Maja [Polish]', 'Jan [Polish]', 'Ewa [Polish]',
      // 'Cristiano [Portuquese]', 'Ines [Portuquese]', 'Carmen [Romanian]', 'Maxim [Russian]', 'Tatyana [Russian]',
      // 'Enrique [Spanish]', 'Penelope [US Spanish]',
      // 'Miguel [US Spanish]', 'Conchita [Castilian Spanish]', 'Astrid [Swedish]', 'Filiz [Turkish]', 'Gwyneth [Welsh]', 'Utah', 'Vermont'
    ];
  }
  save(value, postText) {
    this.inputdata = {
      voice: value,
      text : postText
    };
  }
  submit(postId) {

  }

}
