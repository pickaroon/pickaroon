"use strict";(self.webpackChunklogs=self.webpackChunklogs||[]).push([[8084],{98084:(e,o,n)=>{n.r(o),n.d(o,{conf:()=>s,language:()=>t});var s={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}]},t={defaultToken:"",tokenPostfix:".pascaligo",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["begin","block","case","const","else","end","fail","for","from","function","if","is","nil","of","remove","return","skip","then","type","var","while","with","option","None","transaction"],typeKeywords:["bool","int","list","map","nat","record","string","unit","address","map","mtz","xtz"],operators:["=",">","<","<=",">=","<>",":",":=","and","mod","or","+","-","*","/","@","&","^","%"],symbols:/[=><:@\^&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\$[0-9a-fA-F]{1,16}/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'/,"string","@string"],[/'[^\\']'/,"string"],[/'/,"string.invalid"],[/\#\d+/,"string"]],comment:[[/[^\(\*]+/,"comment"],[/\*\)/,"comment","@pop"],[/\(\*/,"comment"]],string:[[/[^\\']+/,"string"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\(\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODA4NC5idW5kbGUuanMiLCJtYXBwaW5ncyI6InVJQUlPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLEtBQ2JDLGFBQWMsQ0FBQyxLQUFNLE9BRXpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sT0FHakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsYUFBYyxhQUNkQyxZQUFZLEVBQ1pSLFNBQVUsQ0FDTixDQUFFRSxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyxtQkFDaEMsQ0FBRVAsS0FBTSxJQUFLQyxNQUFPLElBQUtNLE1BQU8sb0JBQ2hDLENBQUVQLEtBQU0sSUFBS0MsTUFBTyxJQUFLTSxNQUFPLHlCQUNoQyxDQUFFUCxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyxvQkFFcENDLFNBQVUsQ0FDTixRQUNBLFFBQ0EsT0FDQSxRQUNBLE9BQ0EsTUFDQSxPQUNBLE1BQ0EsT0FDQSxXQUNBLEtBQ0EsS0FDQSxNQUNBLEtBQ0EsU0FDQSxTQUNBLE9BQ0EsT0FDQSxPQUNBLE1BQ0EsUUFDQSxPQUNBLFNBQ0EsT0FDQSxlQUVKQyxhQUFjLENBQ1YsT0FDQSxNQUNBLE9BQ0EsTUFDQSxNQUNBLFNBQ0EsU0FDQSxPQUNBLFVBQ0EsTUFDQSxNQUNBLE9BRUpDLFVBQVcsQ0FDUCxJQUNBLElBQ0EsSUFDQSxLQUNBLEtBQ0EsS0FDQSxJQUNBLEtBQ0EsTUFDQSxNQUNBLEtBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxLQUdKQyxRQUFTLHdCQUVUQyxVQUFXLENBQ1BDLEtBQU0sQ0FFRixDQUNJLGlCQUNBLENBQ0lDLE1BQU8sQ0FDSCxZQUFhLENBQUVQLE1BQU8sY0FDdEIsV0FBWSxnQkFLeEIsQ0FBRVEsUUFBUyxlQUVYLENBQUMsYUFBYyxhQUNmLENBQUMsbUJBQW9CLGFBQ3JCLENBQ0ksV0FDQSxDQUNJRCxNQUFPLENBQ0gsYUFBYyxZQUNkLFdBQVksTUFLeEIsQ0FBQywyQkFBNEIsZ0JBQzdCLENBQUMsc0JBQXVCLGNBQ3hCLENBQUMsTUFBTyxVQUVSLENBQUMsUUFBUyxhQUVWLENBQUMsa0JBQW1CLGtCQUNwQixDQUFDLElBQUssU0FBVSxXQUVoQixDQUFDLFdBQVksVUFDYixDQUFDLElBQUssa0JBQ04sQ0FBQyxRQUFTLFdBR2RFLFFBQVMsQ0FDTCxDQUFDLFdBQVksV0FFYixDQUFDLE9BQVEsVUFBVyxRQUNwQixDQUFDLE9BQVEsWUFFYkMsT0FBUSxDQUNKLENBQUMsVUFBVyxVQUNaLENBQUMsTUFBTyx5QkFDUixDQUFDLElBQUssQ0FBRVYsTUFBTyxlQUFnQlcsUUFBUyxTQUFVQyxLQUFNLFVBRTVEQyxXQUFZLENBQ1IsQ0FBQyxhQUFjLFNBQ2YsQ0FBQyxPQUFRLFVBQVcsWUFDcEIsQ0FBQyxVQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9ncy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcGFzY2FsaWdvL3Bhc2NhbGlnby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJygqJywgJyopJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ10sXG4gICAgICAgIFsnPCcsICc+J11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5wYXNjYWxpZ28nLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2JlZ2luJyxcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbmQnLFxuICAgICAgICAnZmFpbCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpcycsXG4gICAgICAgICduaWwnLFxuICAgICAgICAnb2YnLFxuICAgICAgICAncmVtb3ZlJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdza2lwJyxcbiAgICAgICAgJ3RoZW4nLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd2YXInLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICdvcHRpb24nLFxuICAgICAgICAnTm9uZScsXG4gICAgICAgICd0cmFuc2FjdGlvbidcbiAgICBdLFxuICAgIHR5cGVLZXl3b3JkczogW1xuICAgICAgICAnYm9vbCcsXG4gICAgICAgICdpbnQnLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICdtYXAnLFxuICAgICAgICAnbmF0JyxcbiAgICAgICAgJ3JlY29yZCcsXG4gICAgICAgICdzdHJpbmcnLFxuICAgICAgICAndW5pdCcsXG4gICAgICAgICdhZGRyZXNzJyxcbiAgICAgICAgJ21hcCcsXG4gICAgICAgICdtdHonLFxuICAgICAgICAneHR6J1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICc9JyxcbiAgICAgICAgJz4nLFxuICAgICAgICAnPCcsXG4gICAgICAgICc8PScsXG4gICAgICAgICc+PScsXG4gICAgICAgICc8PicsXG4gICAgICAgICc6JyxcbiAgICAgICAgJzo9JyxcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdtb2QnLFxuICAgICAgICAnb3InLFxuICAgICAgICAnKycsXG4gICAgICAgICctJyxcbiAgICAgICAgJyonLFxuICAgICAgICAnLycsXG4gICAgICAgICdAJyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnXicsXG4gICAgICAgICclJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48OkBcXF4mfCtcXC0qXFwvXFxeJV0rLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVtcXHddKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFwkWzAtOWEtZkEtRl17MSwxNn0vLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nJ10sXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXFwjXFxkKy8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICAvKiAqL1xuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwoXFwqXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy9bL1xcKFxcKi8sICAgICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgY29tbWVudCAgbm90IGFsbG93ZWQgOi0oXG4gICAgICAgICAgICBbL1xcKlxcKS8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvXFwoXFwqLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy9cXChcXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwiaWdub3JlQ2FzZSIsInRva2VuIiwia2V5d29yZHMiLCJ0eXBlS2V5d29yZHMiLCJvcGVyYXRvcnMiLCJzeW1ib2xzIiwidG9rZW5pemVyIiwicm9vdCIsImNhc2VzIiwiaW5jbHVkZSIsImNvbW1lbnQiLCJzdHJpbmciLCJicmFja2V0IiwibmV4dCIsIndoaXRlc3BhY2UiXSwic291cmNlUm9vdCI6IiJ9