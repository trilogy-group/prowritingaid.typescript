# SummaryApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Post**](SummaryApi.md#Post) | **POST** /api/async/summary and **GET** /api/async/result/summary | Universal summary analysis method creates new task which will be processed asynchronously or synchronously  


<a name="Post"></a>
# **Post**
>  Post(request:SummaryAnalysisRequest):Promise\<HttpResponse\<SummaryAnalysisResponse\>\>



### Example
```typescript
import PWA = require('pro_writing_aid_ts');

let api = new PWA.SummaryApi();
api.SetApiKey(PWA.ApiKeys.LicenseCode, '$Your license code$');
let request = new PWA.SummaryAnalysisRequest();
request.Text = "I'd like to by that toy. wood you help me? I have twp more brothers.";
request.Language = PWA.LanguageEnum.En;
request.Style = PWA.StyleEnum.General;
request.Settings = new PWA.AnalysisSettings();
api.Post(request)
    .then(function (data) {
        console.log('API called successfully. Returned data: ');
        console.log(data.Body);
    }, function (error) {
        console.error(error);
    })
/* Example of what you will get
API called successfully. Returned data: 
{ Text: '<div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Key Actions</h3></div><div class=\'box-body\'><ol><li>Your sentence variety is very low and you&#39;re using too many short sentences. Varying your sentence lengths helps keep the reader interested. Add some longer sentences.</li></ol></div></div><div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Document Statistics&nbsp;<small>(The key statistics about your document)</small></h3></div><div class=\'box-body\'><div class=\'inline-box\' style=\'min-width: 190px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>16</span><br><span class=\'text-uppercase progress-name\'>Word Count</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div><div class=\'inline-box\' style=\'min-width: 190px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>3</span><br><span class=\'text-uppercase progress-name\'>Sentences</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div><div class=\'inline-box\' style=\'min-width: 190px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>1</span><br><span class=\'text-uppercase progress-name\'>Paragraphs</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div><div class=\'inline-box\' style=\'min-width: 190px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>51</span><br><span class=\'text-uppercase progress-name\'>Characters</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span><span class=\'progress-note\'>No Spaces</span></div><div class=\'inline-box\' style=\'min-width: 190px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>68</span><br><span class=\'text-uppercase progress-name\'>Characters</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span><span class=\'progress-note\'>With Spaces</span></div></div></div><div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Vocabulary</h3></div><div class=\'box-body\'><div class=\'inline-box\' style=\'min-width: 240px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>15</span><br><span class=\'text-uppercase progress-name\'>Unique Words</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div><div class=\'inline-box\' style=\'min-width: 240px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>13</span><br><span class=\'text-uppercase progress-name\'>Word Families</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div><div class=\'inline-box\' style=\'min-width: 240px;\'><h4>Most Unusual Words</h4><ol><li>twp</li><li>toy</li><li>brothers</li><li>wood</li><li>help</li></ol></div><div class=\'inline-box\' style=\'min-width: 240px;\'><h4>Most Used Words</h4><table class=\'table\'><tbody><tr><td>I</td><td class=\'count\'>2</td></tr><tr><td>had</td><td class=\'count\'>1</td></tr><tr><td>like</td><td class=\'count\'>1</td></tr><tr><td>to</td><td class=\'count\'>1</td></tr><tr><td>by</td><td class=\'count\'>1</td></tr><tr><td>that</td><td class=\'count\'>1</td></tr><tr><td>toy</td><td class=\'count\'>1</td></tr><tr><td>wood</td><td class=\'count\'>1</td></tr><tr><td>you</td><td class=\'count\'>1</td></tr><tr><td>help</td><td class=\'count\'>1</td></tr></tbody></table></div><div class=\'comparison-note\'>Your vocabulary was more dynamic (unique words/total) than <strong>99%</strong> of ProWritingAid users</div></div></div><div class=\'box positive\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Readability Measures&nbsp;<small>(Your text analyzed using common readability measures)</small></h3></div><div class=\'box-body\'><div class="alert alert-info" role="alert"><strong>Tip!</strong> Readability scores are calculated using a combination of words per sentence and syllables per word. Grade Scores correspond to US school grades. i.e. 5th Grade is very easy to read and easily understood by an average 11-year-old student. To improve readability use shorter words and sentences.</div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>133</span><br><span class=\'text-uppercase progress-name\'>Flesch Reading Ease</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target &gt; 60</span></div><div class=\'inline-box\'><h4>Grade Level Measures</h4><table class=\'table\'><tbody><tr><td>Flesch-Kincaid Grade</td><td class=\'count\'>-3.9</td></tr><tr><td>Coleman-Liau</td><td class=\'count\'>-2.6</td></tr><tr><td>Automated Readability Index</td><td class=\'count\'>-3.8</td></tr><tr><td>Dale-Chall Grade</td><td class=\'count\'>5 - 6</td></tr></tbody></table></div><div class=\'inline-box\'><h4>Other Measures</h4><table class=\'table\'><tbody><tr><td>Flesch Reading Ease</td><td class=\'count\'>132.7</td></tr><tr><td>Dale-Chall</td><td class=\'count\'>5.9</td></tr></tbody></table></div><h4>Readability by Paragraph</h4><div class=\'dashboard-pie-chart-wrappper\'><div class=\'dashboard-pie-chart-image\'><img class=\'img-responsive\' src=\'data:image/png;base64,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\'/></div><div class=\'dashboard-pie-chart-labels\'>\r\n<div class=\'dashboard-pie-chart-labels-line\'>\r\n<div class=\'dashboard-pie-chart-labels-line-amount\'>\r\n<span class=\'badge\' style=\'background-color:#00A65A\'>1</span>\r\n</div>\r\n<div class=\'dashboard-pie-chart-labels-line-title\'>\r\nEasy-to-Read Paragraph\r\n</div>\r\n</div>\r\n<div class=\'dashboard-pie-chart-labels-line\'>\r\n<div class=\'dashboard-pie-chart-labels-line-amount\'>\r\n<span class=\'badge\' style=\'background-color:#FFDC46\'>0</span>\r\n</div>\r\n<div class=\'dashboard-pie-chart-labels-line-title\'>\r\nSlightly Difficult-to-Read Paragraphs\r\n</div>\r\n</div>\r\n<div class=\'dashboard-pie-chart-labels-line\'>\r\n<div class=\'dashboard-pie-chart-labels-line-amount\'>\r\n<span class=\'badge\' style=\'background-color:#DD4B39\'>0</span>\r\n</div>\r\n<div class=\'dashboard-pie-chart-labels-line-title\'>\r\nVery Difficult-to-Read Paragraphs\r\n</div>\r\n</div>\r\n</div>\r\n</div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=readability\'>Read More About This Report</a></p></div></div><div class=\'box positive\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Overused Words&nbsp;<small>(Words and phrases that are overused compared to published books)</small></h3></div><div class=\'box-body\'><div class="alert alert-info" role="alert"><strong>Tip!</strong> We compare your document to published writing in the same genre to show overused words and constructs. Identifying and reducing these will improve your writing. Note: Often this requires more than substituting a different word.</div><div class=\'inline-box\' style=\'min-width: 220px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Overused Words</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span></div><div class=\'inline-box\' style=\'min-width: 220px;\'><table class=\'table\'><tbody></tbody></table></div><div class=\'inline-box\' style=\'min-width: 220px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>22</span><br><span class=\'text-uppercase progress-name\'>Not Overused</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div><div class=\'inline-box\' style=\'min-width: 220px;\'><table class=\'table\'><tbody><tr><td>had</td><td class=\'count\'>1</td><td class=\'advice\'>Not overused</td></tr><tr><td>have</td><td class=\'count\'>1</td><td class=\'advice\'>Not overused</td></tr><tr><td>that</td><td class=\'count\'>1</td><td class=\'advice\'>Not overused</td></tr><tr><td>went</td><td class=\'count\'>0</td><td class=\'advice\'>Not overused</td></tr><tr><td>went</td><td class=\'count\'>0</td><td class=\'advice\'>Not overused</td></tr></tbody></table></div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=overused\'>Read More About This Report</a></p></div></div><div class=\'box negative\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Sentence Structure</h3></div><div class=\'box-body\'><div class="alert alert-info" role="alert"><strong>Tip!</strong> Varying your sentence length keeps the reader engaged. Too many long sentences are hard to read.</div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text negative\'>2.9</span><br><span class=\'text-uppercase progress-name\'>Sentence Variety</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-down\'></i></span><span class=\'progress-note\'>Target &gt; 3</span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text negative\'>5.3</span><br><span class=\'text-uppercase progress-name\'>Sentence Length</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-down\'></i></span><span class=\'progress-note\'>Target between 11 and 18</span></div><div class=\'inline-box\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Long Sentences</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span></div><div class=\'comparison-note\'>Your sentence variety was higher than <strong>11%</strong> of ProWritingAid users</div><div class=\'comparison-note\'>Your sentence length was higher than <strong>10%</strong> of ProWritingAid users</div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=slength\'>Read More About This Report</a></p></div></div><div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Sentence Lengths&nbsp;<small>(The length of all the sentences in your document. Varying your sentence length engages your reader.)</small></h3></div><div class=\'box-body\'><div class="alert alert-info" role="alert"><strong>Tip!</strong> Look for areas where all your sentences are around the same length. These areas will benefit from more variety to maintain the reader&#39;s interest.</div><div class=\'bar-chart\'><img class=\'img-responsive\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAABkCAYAAADe4v4kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVdSURBVHhe7daxrVBRFAPB3xpVURRFQoDDE95gnzQrTQuWfyRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiQV+/X7z1+Ass2VJEmSXnedL4CSzZUkSZJed50vgJLNlSRJkl53nS+Aks2VJEmSXnedL4CSzZUkSZJed50vgJLNlSRJkl53nS+Aks2VJEmSXnedL4CSzZUkSZJed50vgJLNlSRJkl53nS+Aks2VJEmSXnedL4CSzZUkSZJed50vgJLNlSRJkl53nS+Aks2VJEmSXnedL4CSzZUkSZJed50vgJLNlSRJkl53nS+Aks2VJEmSXnedL4CSzZUkSZJed50vgJLNlSRJkl53nS+Aks2VJEmSXnedL4CSzZUkSZJed50vgJLNlSRJkl53nS+Aks2VJEmSXnedL4CSzZUkSZJed50vgJLNlSRJkl53nS+Aks2VJEmSXnedL4CSzZUkSZJed50vgJLNlSR9pmvLAEo2VwYL6NtcSdJnurYMoGRzZbCAvs2VJH2ma8sASjZXBgvo21xJ0me6tgygZHNlsIC+zZUkfaZrywBKNlcGC+jbXEnSZ7q2DKBkc2WwgL7NlSR9pmvLAEo2VwYL6NtcSdJnurYMoGRzZbCAvs2VJH2ma8sASjZXBgvo21xJ0me6tgygZHNlsIC+zZUkfaZrywBKNlcGC+jbXEnSZ7q2DKBkc2WwgL7NlSR9pmvLAEo2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyNtcGSygb3Nlr4C8zZW9AvI2VwYL6Ntc2Ssgb3Nlr4C8zZXBAvo2V/YKyNtc2Ssgb3NlsIC+zZW9AvI2V/YKyPu/Vj8//wAaG79NXzKn7gAAAABJRU5ErkJggg==\'/><p></p></div></div></div><div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Writing Style</h3></div><div class=\'box-body\'><div class="alert alert-info" role="alert"><strong>Tip!</strong> Highlights common style issues such as passive voice, hidden verbs and adverb usage.</div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Passive Index</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target &lt; 25</span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Hidden Verbs</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target 0</span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Adverbs</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>0 outside Dialogue</span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Repeated Sentence Starts</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target 0</span></div><div class=\'inline-box\' style=\'min-width: 240px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Style Suggestions</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span></div><div class=\'comparison-note\'>Your readability was better (suggestions/sentences) than <strong>78%</strong> of ProWritingAid users</div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=passive\'>Read More About This Report</a></p></div></div><div class=\'box negative\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Grammar &amp; Spelling</h3></div><div class=\'box-body\'><div class=\'inline-box\' style=\'min-width: 240px;\'><div class=\'progress-header\'><span class=\'progress-amount text negative\'>2</span><br><span class=\'text-uppercase progress-name\'>Grammar Issues</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-down\'></i></span></div><div class=\'inline-box\' style=\'min-width: 240px;\'><h4>Top Grammar Suggestions</h4><table class=\'table\'><tbody><tr><td><span class=\'suggestion-from\'><span>by</span><span class=\'suggestion-to\'>buy</span></span></td><td class=\'count\'>1</td></tr><tr><td><span class=\'suggestion-from\'><span>twp</span><span class=\'suggestion-to\'>two</span></span></td><td class=\'count\'>1</td></tr></tbody></table></div><div class=\'inline-box\' style=\'min-width: 240px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Spelling Issues</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span></div><div class=\'comparison-note\'>Your grammar was better (mistakes/sentences) than <strong>66%</strong> of ProWritingAid users</div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=grammar\'>Read More About This Report</a></p></div></div><div class=\'box positive\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Sticky Sentences&nbsp;<small>(Sticky Sentences contain too many common words. They slow your reader down.)</small></h3></div><div class=\'box-body\'><div class="alert alert-info" role="alert"><strong>Tip!</strong> Sticky sentences are ones containing a high percentage of glue words. Glue words are the 200 or so most common words in English (excluding the personal pronouns). You can think of the glue words as the empty space in your writing. The more of them there are the more empty space your readers have to pass through to get to the actual meaning. By cutting down the amount of glue words in your sentences you help expose the true meaning and make the reader&#39;s job easier.</div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Sticky Sentences</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target 0</span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>37.5%</span><br><span class=\'text-uppercase progress-name\'>Glue Index</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target &lt; 40%</span></div><div class=\'comparison-note\'>Your glue index was better (glue words/total) than <strong>81%</strong> of ProWritingAid users</div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=ssentences\'>Read More About This Report</a></p></div></div><div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Pacing&nbsp;<small>(Shows areas of slower pacing by looking at verb tenses.)</small></h3></div><div class=\'box-body\'><div class="alert alert-info" role="alert"><strong>Tip!</strong> Dark areas in the chart indicate areas of slow pacing (backstory in creative writing). Where you have large chunks of slower pacing, try to add some faster pacing to keep the reader more engaged.</div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>0.0%</span><br><span class=\'text-uppercase progress-name\'>Slow Pacing</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div><div class=\'pacing-chart\'><img class=\'img-responsive\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAABkCAYAAABkSOMoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHrSURBVHhe7dZBEQAwEAOh+DfdmrjXDqhgDwAAwoQXAIA04QUAIE14AQBIE14AANKEFwCANOEFACBNeAEASBNeAADShBcAgDThBQAgTXgBAEgTXgAA0oQXAIA04QUAIE14AQBIE14AANKEFwCANOEFACBNeAEASBNeAADShBcAgDThBQAgTXgBAEgTXgAA0oQXAIA04QUAIE14AQBIE14AANKEFwCANOEFACBNeAEASBNeAADShBcAgDThBQAgTXgBAEgTXgAA0oQXAIA04QUAIE14AQBIE14AANKEFwCANOEFACBNeAEASBNeAADShBcAgDThBQAgTXgBAEgTXgAA0oQXAIA04QUAIE14AQBIE14AANKEFwCANOEFACBNeAEASBNeAADShBcAgDThBQAgTXgBAEgTXgAA0oQXAIA04QUAIE14AQBIE14AANKEFwCANOEFACBNeAEASBNeAADShBcAgDThBQAgTXgBAEgTXgAA0oQXAIA04QUAIE14AQBIE14AANKEFwCANOEFACBNeAEASBNeAADShBcAgDThBQAgTXgBAEgTXgAA0oQXAIA04QUAIE14AQBIE14AANKEFwCANOEFACBNeAEASBNeAADShBcAgDThBQAgbQAAAAAAAAAAAAAAAABwY/sPOD2Wl3TVFwAAAABJRU5ErkJggg==\'/><p></p></div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=pacing\'>Read More About This Report</a></p></div></div><div class=\'box negative\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Transitions&nbsp;<small>(Looks at words and phrases that link your writing together)</small></h3></div><div class=\'box-body\'><div class="alert alert-info" role="alert"><strong>Tip!</strong> Transitions are useful when you&#39;re trying to structure an argument. They link your sentences together forming a flowing and cohesive structure.</div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text negative\'>0.0%</span><br><span class=\'text-uppercase progress-name\'>Transitions</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-down\'></i></span><span class=\'progress-note\'>Target &gt; 25%</span></div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=transition\'>Read More About This Report</a></p></div></div><div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Repeated Phrases</h3></div><div class=\'box-body\'></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=phrases\'>Read More About This Report</a></p></div></div><div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Cliches &amp; Redundancies&nbsp;<small>(Cliches can make your writing sound tired)</small></h3></div><div class=\'box-body\'><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>0</span><br><span class=\'text-uppercase progress-name\'>Cliches</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text none\'>0</span><br><span class=\'text-uppercase progress-name\'>Redundancies</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-\'></i></span></div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=cliche\'>Read More About This Report</a></p></div></div><div class=\'box positive\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Consistency&nbsp;<small>(Checks for consistent spelling, hyphenation and capitalization.)</small></h3></div><div class=\'box-body\'><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Inconsistent Spelling</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target 0</span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Inconsistent Hyphenation</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target 0</span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><div class=\'progress-header\'><span class=\'progress-amount text positive\'>0</span><br><span class=\'text-uppercase progress-name\'>Inconsistent Capitalization</span></div><span class=\'refresh w-p-icon\'><i class=\'fa fa-thumbs-up\'></i></span><span class=\'progress-note\'>Target 0</span></div><div class=\'inline-box\' style=\'min-width: 200px;\'><h4>Usage Consistency</h4><table class=\'table\'><tbody><tr><td>Curls/Smart Double Quotes</td><td class=\'count\'>0</td></tr><tr><td>Straight Double Quotes</td><td class=\'count\'>0</td></tr><tr><td>Curly/Smart Single Quotes</td><td class=\'count\'>0</td></tr><tr><td>Straight Single Quotes</td><td class=\'count\'>1</td></tr><tr><td>Ellipsis characters</td><td class=\'count\'>0</td></tr><tr><td>Three dots</td><td class=\'count\'>0</td></tr><tr><td>Hyphens</td><td class=\'count\'>0</td></tr><tr><td>En-dash</td><td class=\'count\'>0</td></tr><tr><td>Em-dash</td><td class=\'count\'>0</td></tr></tbody></table></div></div><div class=\'box-footer\'><p><a target=\'_blank\' href=\'https://prowritingaid.com/help.aspx?page=consistency\'>Read More About This Report</a></p></div></div><div class=\'box none\'><div class=\'box-header with-border\'><h3 class=\'box-title\'>Other Items</h3></div><div class=\'box-body\'><div class=\'inline-box\' style=\'min-width: 250px;\'><h4>Diction</h4><table class=\'table\'><tbody></tbody></table></div><div class=\'inline-box\' style=\'min-width: 250px;\'><h4>Vague &amp; Abstract Words</h4><table class=\'table\'><tbody><tr><td>like</td><td class=\'count\'>1</td><td class=\'advice\'>Vague</td></tr></tbody></table></div><div class=\'inline-box\' style=\'min-width: 250px;\'><h4>Corporate Wording</h4><table class=\'table\'><tbody></tbody></table></div></div></div>' }

 */

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SummaryAnalysisRequest**](SummaryAnalysisRequest.md)|  | 

### Return type

Promise<[HttpResponse](HttpResponse.md)<[**SummaryAnalysisResponse**](SummaryAnalysisResponse.md)>>

### Authorization

Set correct API key prior to any request

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
