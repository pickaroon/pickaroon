"use strict";(self.webpackChunklogs=self.webpackChunklogs||[]).push([[2060],{32060:(e,o,n)=>{n.r(o),n.d(o,{conf:()=>s,language:()=>t});var s={comments:{lineComment:";",blockComment:["#|","|#"]},brackets:[["(",")"],["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},t={defaultToken:"",ignoreCase:!0,tokenPostfix:".scheme",brackets:[{open:"(",close:")",token:"delimiter.parenthesis"},{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"}],keywords:["case","do","let","loop","if","else","when","cons","car","cdr","cond","lambda","lambda*","syntax-rules","format","set!","quote","eval","append","list","list?","member?","load"],constants:["#t","#f"],operators:["eq?","eqv?","equal?","and","or","not","null?"],tokenizer:{root:[[/#[xXoObB][0-9a-fA-F]+/,"number.hex"],[/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/,"number.float"],[/(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,["keyword","white","variable"]],{include:"@whitespace"},{include:"@strings"},[/[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,{cases:{"@keywords":"keyword","@constants":"constant","@operators":"operators","@default":"identifier"}}]],comment:[[/[^\|#]+/,"comment"],[/#\|/,"comment","@push"],[/\|#/,"comment","@pop"],[/[\|#]/,"comment"]],whitespace:[[/[ \t\r\n]+/,"white"],[/#\|/,"comment","@comment"],[/;.*$/,"comment"]],strings:[[/"$/,"string","@popall"],[/"(?=.)/,"string","@multiLineString"]],multiLineString:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string.escape"],[/"/,"string","@popall"],[/\\$/,"string"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA2MC5idW5kbGUuanMiLCJtYXBwaW5ncyI6InVJQUlPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLElBQ2JDLGFBQWMsQ0FBQyxLQUFNLE9BRXpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkMsaUJBQWtCLENBQ2QsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE9BR2pCRSxFQUFXLENBQ2xCQyxhQUFjLEdBQ2RDLFlBQVksRUFDWkMsYUFBYyxVQUNkUixTQUFVLENBQ04sQ0FBRUUsS0FBTSxJQUFLQyxNQUFPLElBQUtNLE1BQU8seUJBQ2hDLENBQUVQLEtBQU0sSUFBS0MsTUFBTyxJQUFLTSxNQUFPLG1CQUNoQyxDQUFFUCxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyxxQkFFcENDLFNBQVUsQ0FDTixPQUNBLEtBQ0EsTUFDQSxPQUNBLEtBQ0EsT0FDQSxPQUNBLE9BQ0EsTUFDQSxNQUNBLE9BQ0EsU0FDQSxVQUNBLGVBQ0EsU0FDQSxPQUNBLFFBQ0EsT0FDQSxTQUNBLE9BQ0EsUUFDQSxVQUNBLFFBRUpDLFVBQVcsQ0FBQyxLQUFNLE1BQ2xCQyxVQUFXLENBQUMsTUFBTyxPQUFRLFNBQVUsTUFBTyxLQUFNLE1BQU8sU0FDekRDLFVBQVcsQ0FDUEMsS0FBTSxDQUNGLENBQUMsd0JBQXlCLGNBQzFCLENBQUMsMkNBQTRDLGdCQUM3QyxDQUNJLHlFQUNBLENBQUMsVUFBVyxRQUFTLGFBRXpCLENBQUVDLFFBQVMsZUFDWCxDQUFFQSxRQUFTLFlBQ1gsQ0FDSSxrQ0FDQSxDQUNJQyxNQUFPLENBQ0gsWUFBYSxVQUNiLGFBQWMsV0FDZCxhQUFjLFlBQ2QsV0FBWSxpQkFLNUJDLFFBQVMsQ0FDTCxDQUFDLFVBQVcsV0FDWixDQUFDLE1BQU8sVUFBVyxTQUNuQixDQUFDLE1BQU8sVUFBVyxRQUNuQixDQUFDLFFBQVMsWUFFZEMsV0FBWSxDQUNSLENBQUMsYUFBYyxTQUNmLENBQUMsTUFBTyxVQUFXLFlBQ25CLENBQUMsT0FBUSxZQUViQyxRQUFTLENBQ0wsQ0FBQyxLQUFNLFNBQVUsV0FDakIsQ0FBQyxTQUFVLFNBQVUscUJBRXpCQyxnQkFBaUIsQ0FDYixDQUFDLFdBQVksU0FBVSxXQUN2QixDQUFDLFVBQVcsVUFDWixDQUFDLE1BQU8saUJBQ1IsQ0FBQyxJQUFLLFNBQVUsV0FDaEIsQ0FBQyxNQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9ncy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2NoZW1lL3NjaGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJzsnLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnI3wnLCAnfCMnXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWycoJywgJyknXSxcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIHRva2VuUG9zdGZpeDogJy5zY2hlbWUnLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnY2FzZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdsZXQnLFxuICAgICAgICAnbG9vcCcsXG4gICAgICAgICdpZicsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ3doZW4nLFxuICAgICAgICAnY29ucycsXG4gICAgICAgICdjYXInLFxuICAgICAgICAnY2RyJyxcbiAgICAgICAgJ2NvbmQnLFxuICAgICAgICAnbGFtYmRhJyxcbiAgICAgICAgJ2xhbWJkYSonLFxuICAgICAgICAnc3ludGF4LXJ1bGVzJyxcbiAgICAgICAgJ2Zvcm1hdCcsXG4gICAgICAgICdzZXQhJyxcbiAgICAgICAgJ3F1b3RlJyxcbiAgICAgICAgJ2V2YWwnLFxuICAgICAgICAnYXBwZW5kJyxcbiAgICAgICAgJ2xpc3QnLFxuICAgICAgICAnbGlzdD8nLFxuICAgICAgICAnbWVtYmVyPycsXG4gICAgICAgICdsb2FkJ1xuICAgIF0sXG4gICAgY29uc3RhbnRzOiBbJyN0JywgJyNmJ10sXG4gICAgb3BlcmF0b3JzOiBbJ2VxPycsICdlcXY/JywgJ2VxdWFsPycsICdhbmQnLCAnb3InLCAnbm90JywgJ251bGw/J10sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFsvI1t4WG9PYkJdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvWystXT9cXGQrKD86KD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg/OlxcYig/OihkZWZpbmV8ZGVmaW5lLXN5bnRheHxkZWZpbmUtbWFjcm8pKVxcYikoXFxzKykoKD86XFx3fFxcLXxcXCF8XFw/KSopLyxcbiAgICAgICAgICAgICAgICBbJ2tleXdvcmQnLCAnd2hpdGUnLCAndmFyaWFibGUnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfI11bYS16QS1aMC05X1xcLVxcP1xcIVxcKl0qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudHMnOiAnY29uc3RhbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3JzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFx8I10rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvI1xcfC8sICdjb21tZW50JywgJ0BwdXNoJ10sXG4gICAgICAgICAgICBbL1xcfCMvLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXHwjXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXG4gICAgICAgICAgICBbLyNcXHwvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy87LiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbL1wiJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9cIig/PS4pLywgJ3N0cmluZycsICdAbXVsdGlMaW5lU3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgbXVsdGlMaW5lU3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSskLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJzdXJyb3VuZGluZ1BhaXJzIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJpZ25vcmVDYXNlIiwidG9rZW5Qb3N0Zml4IiwidG9rZW4iLCJrZXl3b3JkcyIsImNvbnN0YW50cyIsIm9wZXJhdG9ycyIsInRva2VuaXplciIsInJvb3QiLCJpbmNsdWRlIiwiY2FzZXMiLCJjb21tZW50Iiwid2hpdGVzcGFjZSIsInN0cmluZ3MiLCJtdWx0aUxpbmVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9