/**
 * ProWritingAid.API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import httpRequest = require('request');
import http = require('http');
import Promise = require('bluebird');

let defaultBasePath = 'https://api.prowritingaid.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export enum IsPositiveEnum {
    Positive = <any> 'Positive',
    Negative = <any> 'Negative',
    Information = <any> 'Information'
}

export enum StyleEnum {
    NotSet = <any> 'NotSet',
    General = <any> 'General',
    Academic = <any> 'Academic',
    Business = <any> 'Business',
    Technical = <any> 'Technical',
    Creative = <any> 'Creative',
    Casual = <any> 'Casual',
    Web = <any> 'Web'
}

export enum LanguageEnum {
    EnUS = <any> 'en_US',
    EnUK = <any> 'en_UK',
    En = <any> 'en',
    Es = <any> 'es'
}

export enum OrientationEnum {
    Horizontal = <any> 'Horizontal',
    MostlyHorizontal = <any> 'MostlyHorizontal',
    Vertical = <any> 'Vertical',
    MostlyVertical = <any> 'MostlyVertical',
    HalfAndHalf = <any> 'HalfAndHalf',
    EveryWhichWay = <any> 'EveryWhichWay'
}
export enum CaseMethodEnum {
    PreserveCase = <any> 'PreserveCase',
    Lowercase = <any> 'Lowercase',
    Uppercase = <any> 'Uppercase',
    IntelligentCase = <any> 'IntelligentCase'
}

export class AnalysisSettings {
    /**
     * <remarks>Default is 11</remarks>
     */
    'ShortestAverageSentenceLength': number = 11;
    /**
     * <remarks>Default is 18</remarks>
     */
    'LongestAverageSentenceLength': number = 18;
    /**
     * <remarks>Default is 30</remarks>
     */
    'LongestIndividualSentence': number = 30;
    /**
     * <remarks>Default is 25</remarks>
     */
    'HighestPassiveIndex': number = 25;
    /**
     * <remarks>Default is 40</remarks>
     */
    'MaxGlueIndex': number = 40;
    /**
     * <remarks>Default is 3</remarks>
     */
    'MinSentenceVariety': number = 3;
    /**
     * <remarks>Default is 15</remarks>
     */
    'HighestPronounPercentage': number = 15;
    /**
     * <remarks>Default is 4</remarks>
     */
    'LowestPronounPercentage': number = 4;
    /**
     * <remarks>Default is 2</remarks>
     */
    'HighestAcademicPronounPercentage': number = 2;
    /**
     * <remarks>Default is 30</remarks>
     */
    'HighestInitialPronounPercentage': number = 30;
    /**
     * <remarks>Default is 0</remarks>
     */
    'LowestInitialPronounPercentage': number = 0;
    /**
     * <remarks>Default is .6</remarks>
     */
    'LowestWeWeScore': number = .6;
    /**
     * <remarks>Default is 6</remarks>
     */
    'LongestAverageParagraphLength': number = 6;
}

/**
 * Represents report summary
 */
export class AnalysisSummary {
    /**
     * Report's display name
     */
    'ReportDisplayName': string;
    /**
     * Report's ID
     */
    'ReportName': string;
    /**
     * Found issues
     */
    'SummaryItems': Array<AnalysisSummaryItem>;
    /**
     * Number of found issues
     */
    'NumberOfIssues': number;
    /**
     * Short report description
     */
    'ReportDescription': string;
}

export class AnalysisSummaryGraph {
    'Name': string;
    'Items': Array<AnalysisSummaryGraphItem>;
}

export class AnalysisSummaryGraphItem {
    'Label': string;
    'Color': string;
    'Length': number;
    'SubCategory': string;
    'Index': number;
    'Id': string;
}

export class AnalysisSummaryItem {
    'Text': string;
    'Graph': AnalysisSummaryGraph;
    'Url': string;
    'UrlText': string;
    'SubItems': Array<AnalysisSummarySubItem>;
    'IsPositive': IsPositiveEnum;
    'Category': SuggestionCategory;
    'CategoryName': string;
    'NumIssues': number;
}

export class AnalysisSummarySubItem {
    'TagIds': Array<string>;
    'Text': string;
    'SuggestionCategory': string;
    'SubCategory': string;
    'SearchTerm': string;
}

export class ContextualThesaurusRequest {
    /**
     * the word for the thesaurus call with surrounding context
     */
    'Context': string;
    /**
     * the start position of the word to get suggestions for. 0 based
     */
    'ContextStart': number;
    /**
     * the end position of the word to get suggestions for. 0 based. Would be the same as the start pos for a 1 letter word
     */
    'ContextEnd': number;
}

export class ContextualThesaurusResponse {
    /**
     * List of context-specific suggestions
     */
    'Suggestions': Array<string>;
}

export class DocTag {
    /**
     * The start position of the suggestion. 0 based
     */
    'StartPos': number;
    /**
     * The end position of the suggestion. 0 based
     */
    'EndPos': number;
    /**
     * Report Id
     */
    'Report': string;
    /**
     * List of source documents found by plagiarism checker
     */
    'Urls': Array<string>;
    /**
     * Suggestion's category
     */
    'Category': string;
    /**
     * Suggestion's category display name
     */
    'CategoryDisplayName': string;
    /**
     * Suggestion's subcategory
     */
    'Subcategory': string;
    /**
     * Short suggestion's description
     */
    'Hint': string;
    /**
     * List of possible replacements
     */
    'Suggestions': Array<string>;
    /**
     * Identifies that this suggestion is a part of larger one
     */
    'IsSubTag': boolean;
    /**
     *
     */
    'HelpId': string;
    /**
     * Suggestion's Id
     */
    'Id': string;
}

export class HtmlAnalysisRequest {
    /**
     * Html to be processed
     */
    'Html': string;
    /**
     * List of reports   <example>  [\"grammar\",\"overused\"]  </example><remarks>  List of currently supported reports:  acronym,alliteration,allrepeats,allsentences,  cliche,closerepeat,combo,complex,consistency,  core,corporate,dialog,diction,dva,eloquence,  grammar,grammarplus,homonym,house,initial,nlp,  overused,overusedonly,overview,pacing,passive,  phrases,plagiarism,plength,preadability,slength,  ssentences,ssentences_noglue,structure,thesaurus,  transition,vague,wordcloud,wordsandphrases,wordsphrases  </remarks>
     */
    'Reports': Array<string>;
    /**
     * Document's writing style
     */
    'Style': StyleEnum;
    /**
     * Document's language  <remarks>  Set correct UK/US language to get region-specific suggestions  </remarks>
     */
    'Language': LanguageEnum;
}



export class HtmlAnalysisResponse {
    /**
     * Result in form of html.  Contains tags with meta-information
     */
    'Html': string;
    /**
     * Number of processed words
     */
    'WordCount': number;
    /**
     *
     */
    'Summaries': Array<AnalysisSummary>;
}

export class SuggestionCategory {
    'Name': string;
    'DisplayName': string;
    'Description': string;
}

export class SummaryAnalysisRequest {
    /**
     * Text to be analyzed
     */
    'Text': string;
    /**
     * Analysis settings
     */
    'Settings': AnalysisSettings;
    /**
     * Document's writing style
     */
    'Style': StyleEnum;
    /**
     * Document's language  <remarks>  Set correct UK/US language to get region-specific suggestions  </remarks>
     */
    'Language': LanguageEnum;
}

export class SummaryAnalysisResponse {
    /**
     * SUmmary report renderred as html
     */
    'Text': string;
}

export class TextAnalysisRequest {
    /**
     * Text to be processed
     */
    'Text': string;
    /**
     * List of reports   <example>  [\"grammar\",\"overused\"]  </example><remarks>  List of currently supported reports:  acronym,alliteration,allrepeats,allsentences,  cliche,closerepeat,combo,complex,consistency,  core,corporate,dialog,diction,dva,eloquence,  grammar,grammarplus,homonym,house,initial,nlp,  overused,overusedonly,overview,pacing,passive,  phrases,plagiarism,plength,preadability,slength,  ssentences,ssentences_noglue,structure,thesaurus,  transition,vague,wordcloud,wordsandphrases,wordsphrases  </remarks>
     */
    'Reports': Array<string>;
    /**
     * Document's writing style
     */
    'Style': StyleEnum;
    /**
     * Document's language  <remarks>  Set correct UK/US language to get region-specific suggestions  </remarks>
     */
    'Language': LanguageEnum;
}

export class TextAnalysisResponse {
    /**
     * List of found suggestions
     */
    'Tags': Array<DocTag>;
    /**
     * Number of processed words
     */
    'WordCount': number;
    /**
     *
     */
    'Summaries': Array<AnalysisSummary>;
}

export class WordCloudRequest {
    /**
     * The text to be turned into a Word Cloud
     */
    'Text': string;
    /**
     * The orientation of the text
     */
    'Orientation': OrientationEnum;
    /**
     * The method to be used for casing
     */
    'CaseMethod': CaseMethodEnum;
    /**
     * The name of the palette
     */
    'PaletteName': string;
    /**
     * the maximum number of words to be created
     */
    'MaximumWordCount': number;
    /**
     * Should Common words be removed from the cloud
     */
    'RemoveCommonWords': boolean;
    /**
     * The name of the font to use
     */
    'FontName': string;
    /**
     * The width of the image to produce
     */
    'Width': number;
    /**
     * The height of the image to produce
     */
    'Height': number;
    /**
     * Only use the sentiment words from the text
     */
    'OnlySentimentWords': boolean;
    /**
     * Document's writing style
     */
    'Style': StyleEnum;
    /**
     * Document's language  <remarks>  Set correct UK/US language to get region-specific suggestions  </remarks>
     */
    'Language': LanguageEnum;
}

export namespace WordCloudRequest {

}
export class WordCloudResponse {
    /**
     * the URL of the Word Cloud
     */
    'Url': string;
    /**
     * The detected language of the text
     */
    'Language': string;
}

export class HttpResponse<T> {
    /**
     * Actual http response
     */
    public Response: http.ClientResponse;
    /**
     * Typed response body
     */
    public Body: T;

    constructor(response: http.ClientResponse, body: T) {
        this.Body = <T>body;
        this.Response = response;
    }
}

class AsyncResponse<TResponse> {
    /**
     * Async task Id  <remarks>  Empty or null if task was processed synchronously  </remarks>
     */
    'TaskId': string;
    /**
     * Actual response
     */
    'Result': TResponse;
}


interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    ApplyToRequest(requestOptions: httpRequest.Options): void;
}

class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    ApplyToRequest(requestOptions: httpRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header") {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export enum ApiKeys {
    LicenseCode,
}

abstract class ApiBase<TRequest, TResponse> {
    protected readonly path: string;
    protected readonly basePath: string = defaultBasePath;
    protected readonly defaultHeaders: any = {};
    protected readonly authentications = {
        'LicenseCode': new ApiKeyAuth('header', 'licenseCode'),
    };

    constructor(path: string, basePath?: string) {
        this.path = path;
        if (basePath !== null && basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    public SetApiKey(key: ApiKeys, value: string) {
        this.authentications[ApiKeys[key]].apiKey = value;
    }

    protected static ExtendObj(objA: any, objB: any) {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }

    public static HandleResponse<TResponse extends http.ClientResponse, TBody>(response: TResponse, body: TBody, resolve, reject): void {
        if (response.statusCode >= 200 && response.statusCode <= 299) {
            resolve(new HttpResponse(response, body));
        } else {
            reject(new HttpResponse(response, <TBody>body));
        }
    }
}

class PostApiBase<TRequest, TResponse>extends ApiBase<TRequest, TResponse> {

    public Post(request: TRequest): Promise<HttpResponse<TResponse>> {
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling asyncContextualThesaurusPost.');
        }
        let localVarPath: string = this.basePath + this.path;
        let queryParameters: any = {};
        let headerParams: any = ApiBase.ExtendObj({}, this.defaultHeaders);
        let formParams: any = {};

        let useFormData = false;

        let requestOptions: httpRequest.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: false,
            json: true,
            body: request,
        };

        this.authentications.LicenseCode.ApplyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<HttpResponse<TResponse>>((resolve, reject) => {
            httpRequest(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    ApiBase.HandleResponse(response, body, resolve, reject);
                }
            });
        });
    }
}

class GetApiBase<TRequest, TResponse> extends ApiBase<TRequest, TResponse> {

    public Get(request: TRequest): Promise<HttpResponse<TResponse>> {
        // verify required parameter 'taskId' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined.');
        }

        let localVarPath: string = this.basePath + this.path + '/' + String(request);
        let queryParameters: any = {};
        let headerParams: any = ApiBase.ExtendObj({}, this.defaultHeaders);
        let formParams: any = {};
        let useFormData = false;

        let requestOptions: httpRequest.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: false,
            json: true,
        };

        this.authentications.LicenseCode.ApplyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<HttpResponse<TResponse>>((resolve, reject) => {
            httpRequest(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    ApiBase.HandleResponse(response, body, resolve, reject);
                }
            });
        });
    }
}

export abstract class AsyncApiBase<TRequest, TResponse> {
    private readonly setter: PostApiBase<TRequest, AsyncResponse<TResponse>>;
    private readonly getter: GetApiBase<string, AsyncResponse<TResponse>>;
    /**
     * Default async API call, default is 100 secs
     */
    private readonly DefaultTimeoutInMs: number = 100000;
    /**
     * Default interval between getResult calls, default is 1 sec
     */
    private readonly DefaultAwaitCallDelay = 1000;

    constructor(apiId: string, basePath?: string) {
        this.setter = new PostApiBase<TRequest, AsyncResponse<TResponse>>('/api/async/' + apiId, basePath);
        this.getter = new GetApiBase<string, AsyncResponse<TResponse>>('/api/async/result/' + apiId, basePath);
    }

    public SetApiKey(key: ApiKeys, value: string) {
        this.getter.SetApiKey(key, value);
        this.setter.SetApiKey(key, value);
    }

    /**
     * Processes request synchronously or asynchronously
     * @param request Request to be processed
     * @param settings Async processing timeouts (makes sense to set TimeoutInMs > 30 secs)
     * @returns {Bluebird<HttpResponse<any>>}
     */
    public Post(request: TRequest, settings?: { TimeoutInMs: number; AwaitCallDelay: number; }): Promise<HttpResponse<TResponse>> {
        if (settings == null) {
            settings = {
                TimeoutInMs: this.DefaultTimeoutInMs,
                AwaitCallDelay: this.DefaultAwaitCallDelay
            }
        }
        if (settings.AwaitCallDelay == null) {
            settings.AwaitCallDelay = this.DefaultAwaitCallDelay
        }
        if (settings.TimeoutInMs == null) {
            settings.TimeoutInMs = this.DefaultTimeoutInMs
        }
        let numberOfAttempts = 0;
        let _getter = this.getter;

        function delay<T>(interval: number): Promise<T> {
            return new Promise<T>((resolve) => {
                global.setTimeout(resolve, interval);
            });
        }

        function errorContinuation<T>(error) {
            return new Promise<T>((resolve, reject) => {
                reject(error);
            });
        }

        function continuation(data: HttpResponse<AsyncResponse<TResponse>>): Promise<HttpResponse<TResponse>> {
            numberOfAttempts++;
            let body = data.Body as AsyncResponse<TResponse>;
            if (body.Result != null) {
                return new Promise<HttpResponse<TResponse>>((resolve, reject) => {
                    ApiBase.HandleResponse(data.Response, data.Body.Result, resolve, reject)
                });
            }
            if (numberOfAttempts >= settings.TimeoutInMs / settings.AwaitCallDelay) {
                return new Promise<HttpResponse<TResponse>>((resolve, reject) => {
                    reject(new Error("Operation timed out"))
                });
            }
            return delay<{ response: http.ClientResponse; body: TResponse; }>(settings.AwaitCallDelay)
                .then(() => {
                    return _getter.Get(data.Body.TaskId)
                        .then(continuation)
                });
        }

        return this.setter.Post(request)
            .then(continuation, (error) => errorContinuation<HttpResponse<TResponse>>(error));

    }
}

export class HtmlApi extends AsyncApiBase<HtmlAnalysisRequest, HtmlAnalysisResponse> {
    constructor(basePath?: string) {
        super('html', basePath);
    }
}

export class TextApi extends AsyncApiBase<TextAnalysisRequest, TextAnalysisResponse> {
    constructor(basePath?: string) {
        super('text', basePath);
    }
}

export class SummaryApi extends AsyncApiBase<SummaryAnalysisRequest, SummaryAnalysisResponse> {
    constructor(basePath?: string) {
        super('summary', basePath);
    }
}

export class WordCloudApi extends AsyncApiBase<WordCloudRequest, WordCloudResponse> {
    constructor(basePath?: string) {
        super('wordcloud', basePath);
    }
}

export class ContextualThesaurusApi extends AsyncApiBase<ContextualThesaurusRequest, ContextualThesaurusResponse> {
    constructor(basePath?: string) {
        super('contextualthesaurus', basePath);
    }
}


